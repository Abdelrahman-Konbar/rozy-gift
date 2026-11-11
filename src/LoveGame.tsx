import { useEffect, useRef, useState } from 'react'
import type { LoveGame as LoveGameContent } from './data/content'
import './love-game.css'

export function LoveGame({ game, onNext }: { game: LoveGameContent; onNext: () => void }) {
  const [tries, setTries] = useState(0), [yes, setYes] = useState(false), [pos, setPos] = useState({ x: 50, y: 62 })
  const area = useRef<HTMLDivElement>(null)
  const move = () => { if (tries >= game.maxEscapes) return; const box = area.current?.getBoundingClientRect(); if (!box) return; const padX = Math.min(92, Math.max(8, 120 / box.width * 100)), padY = Math.min(84, Math.max(12, 55 / box.height * 100)); setPos({ x: padX + Math.random() * (100 - padX * 2), y: padY + Math.random() * (100 - padY * 2) }); setTries(v => v + 1) }
  useEffect(() => { const onResize = () => setPos(p => ({ x: Math.min(90, Math.max(10, p.x)), y: Math.min(82, Math.max(15, p.y)) })); addEventListener('resize', onResize); return () => removeEventListener('resize', onResize) }, [])
  const last = tries >= game.maxEscapes, note = game.escapeAttempts[Math.min(Math.max(tries - 1, 0), game.escapeAttempts.length - 1)]
  return <div className="content centered love-game"><h1>{game.title}</h1><p>{game.description}</p><div className="love-area" ref={area}>{yes ? <div className="love-reveal"><div className="love-emoji">{game.yesEmoji}</div><div>{game.yesText.split('\n').map((x,i)=><p key={i}>{x || '\u00a0'}</p>)}</div><Burst /><button className="primary" onClick={onNext}>{game.yesContinueButton}</button></div> : <><button className="love-yes" onClick={() => setYes(true)}>{game.yesButton}</button><button className="love-no" onClick={move} style={{ left: `${pos.x}%`, top: `${pos.y}%` }}>{game.noButton}</button>{tries > 0 && !last && <div className="love-note"><b>{note.emoji}</b><span>{note.text}</span></div>}{last && <div className="love-final"><Burst /><strong>{game.finalEmoji}</strong><h2>{game.finalTitle}</h2><p>{game.finalText}</p><button className="primary" onClick={() => setYes(true)}>{game.yesButton}</button><button className="secondary" onClick={onNext}>{game.continueButton}</button></div>}</>}</div></div>
}
const Burst = () => <div className="burst">{Array.from({ length: 15 }, (_, i) => <span key={i} style={{ '--i': i } as React.CSSProperties}>♥</span>)}</div>
