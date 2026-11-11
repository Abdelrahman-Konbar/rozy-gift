/** كل محتوى الهدية في مكان واحد. عدّل النصوص هنا أو من لوحة /#/edit. */
import finalContent from './final-content.json'
export type Memory = { title: string; text: string }
export type Question = { question: string; answers: string[]; correct: number; correctMessage?: string; wrongMessage?: string }
export type WheelItem = { title: string; text: string }
export type LoveGame = { title: string; description: string; yesButton: string; noButton: string; escapeAttempts: { emoji: string; text: string }[]; maxEscapes: number; finalEmoji: string; finalTitle: string; finalText: string; continueButton: string; yesEmoji: string; yesText: string; yesContinueButton: string }
export type MusicSettings = { title: string; artist: string; heading: string; description: string; src: string }
export type GiftContent = {
  names: { from: string; fromNickname: string; to: string; toNickname: string }
  startDate: string
  intro: { envelope: string; title: string; paragraphs: string[]; button: string }
  story: { title: string; paragraphs: string[]; counterTitle: string; counterNote: string }
  memoriesTitle: string; memories: Memory[]
  quizTitle: string; quiz: { questions: Question[]; correct: string; wrong: string; ending: string }
  secretsTitle: string; secrets: string[]
  wheelTitle: string; wheel: WheelItem[]
  promisesTitle: string; promises: string[]; promisesEnding: string
  music?: MusicSettings
  loveGame?: LoveGame
  unlock: { title: string; description: string; message: string; button: string; skip: string }
  letter: { title: string; text: string; ending: string; signature: string }
}

export const defaultLoveGame: LoveGame = {
  title: 'طب سؤال صغير... بتحبيني؟ 🥹❤️', description: 'جاوبي من قلبك، بس فكري كويس قبل ما تختاري 😂❤️', yesButton: 'بحبك ❤️', noButton: 'مش بحبك 🙄', maxEscapes: 10,
  escapeAttempts: [{emoji:'😳',text:'إيه ده؟!'},{emoji:'🥺',text:'طب فكري تاني.'},{emoji:'😭',text:'قلبي !'},{emoji:'😤',text:'مش موافق على الإجابة دي.'},{emoji:'😱',text:'هو انتي بتتكلمي جد؟!'},{emoji:'💔',text:'كده قلبي اتكسر.'},{emoji:'🤨',text:'متأكدة يعني؟'},{emoji:'😩',text:'طب آخر فرصة؟'},{emoji:'🥹',text:'حرام عليكي بقى.'},{emoji:'😠',text:'الزرار مش هيستسلم!'}],
  finalEmoji: '🥹❤️', finalTitle: 'خلاص يا ستي، أنا هفضل أحبك برضه 😂❤️', finalText: 'حتى لو اخترتي مش بحبك ألف مرة، ده مش هيغيّر إني بحبك وبختارك كل يوم.', continueButton: 'يلا نكمل حكايتنا 💜', yesEmoji: '🥹❤️', yesText: 'أنا كنت عارف من الأول 😂❤️\n\nوأنا كمان بحبك، أكتر ما تتخيلي.\n\nبس كنت عايز أسمعها منك حتى لو في لعبة 💜', yesContinueButton: 'يلا أوريكي اللي جوا قلبي 💌'
}

export const defaultMusic: MusicSettings = { title: 'ليلى', artist: 'كايروكي', heading: 'شغّلي الأغنية دي الأول 🎧💜', description: 'واعتبري إن كل جملة بتتقال فيها هي ليكي إنتِ يا سارة ❤️', src: '/assets/layla.mp3' }

export const quizResponseDefaults = [
  { correctMessage: 'واضح إنك مركزة في حكايتنا 😄❤️', wrongMessage: 'قريبة، بس فكري في أول انطباع بجد.' },
  { correctMessage: 'بالظبط... صدفة صغيرة عملت كل الحكاية.', wrongMessage: 'لأ، البداية كانت أغرب وأحلى من كده.' },
  { correctMessage: 'أيوه، الميلك شيك اللي محتاج اعتذار رسمي 😂', wrongMessage: 'ملحوظة مهمة: بلاش نكرر الطلب ده 😂' },
  { correctMessage: 'ده شعور الطريق كله كان بيهون عشانه.', wrongMessage: 'مش امتحان يا روحي، دي كانت فرحة.' },
  { correctMessage: 'إجابة من القلب فعلًا ❤️', wrongMessage: 'اختاري الإجابة اللي فيها مستقبلنا سوا.' }
]

const fallbackContent: GiftContent = {
  names: { from: 'عبده', fromNickname: 'بوبو', to: 'سارة', toNickname: 'روزي' },
  startDate: '2022-07-20T00:00:00+03:00',
  intro: { envelope: 'إلى روزي، من بوبو ❤️', title: 'يا روزي... 💜', paragraphs: ['عارف إن مفيش مناسبة النهارده، بس هو أنا لازم أستنى مناسبة علشان أقولك إني بحبك اكيد لا يعني مش منطقي 😂❤️', 'عملتلك حاجة صغيرة، فيها شوية من حكايتنا وشوية من قلبي.', 'جاهزة تدخلي جوا قلبي؟'], button: 'يلا يا حبيبتي 💗' },
  story: { title: 'صدفة غيرت حياتي ✨', paragraphs: ['مين كان يتخيل إن مشكلة بين بنت أختي وصاحبتها تكون سبب إني أعرف أحلى بنت في حياتي؟', 'في الأول كنا بنتكلم بسبب المشكلة، بس واحدة واحدة بدأت أشوف شخصيتك وطريقتك ولطافتك... ولقيت نفسي بحبك.'], counterTitle: 'من يوم ما بدأت أجمل حكاية في حياتي', counterNote: 'وكل ثانية بتعدّي، لسه نفسي أعيش معاكي ثواني أكتر.' },
  memoriesTitle: 'محطات من حكايتنا 📖',
  memories: [
    { title: 'اليوم اللي بقينا فيه على حقيقتنا', text: 'فاكرة اليوم اللي اتعرفنا فيه بجد؟ من غير الشخصيات اللي كنا لابسينها بسبب المشكلة؟ اليوم ده أنا قدرت أوريكي أنا مين بجد، ودي من أحلى الحاجات اللي حصلتلي.' },
    { title: 'لما قبلتيني زي ما أنا', text: 'في يوم صارحتك بحاجة فيا كنت خايف إنها تغير نظرتك ليا. بس إنتِ تقبلتيني وحبيتيني زي ما أنا. يمكن إنتِ مش متخيلة قد إيه الموقف ده كان كبير عندي.' },
    { title: 'أول مرة شوفتك', text: 'أول مرة اتقابلنا، حسيت إن الدنيا كلها مش مهمة، وإن كل اللي عايزه أكون معاكي وبس. وطبعًا مين ينسى عبقريتي لما طلبلك ميلك شيك فراولة وإنتِ عندك حساسية من اللبن؟ 😂❤️' },
    { title: 'عيد ميلادك', text: 'حتى في الفترة اللي ماكناش فيها مع بعض، كنت لسه نفسي أفرحك وأعملك مفاجأة في عيد ميلادك. فرحتك كانت وما زالت بتفرق معايا لما قولتيلي بعدها انها فرحتك.' },
    { title: 'الطريق ليكي', text: 'كل مرة كنت بسافرلك من عندي لعندك، قلبي كان بيطير من الفرحة. كنت بحس إن كل المسافة دي ولا حاجة قدام اللحظة اللي هشوفك فيها.' },
    { title: 'ولسه حكايتنا مكملة', text: 'يمكن إحنا بعيد دلوقتي، بس إنتِ لسه في قلبي وتفكيري. ونفسي الأيام اللي جاية تقربنا أكتر من بعض.' }
  ],
  quizTitle: 'قد إيه تعرفيني؟ 🎮',
  quiz: { correct: 'إنتِ حافظة قلبي ولا إيه؟ 😂❤️', wrong: 'قريبة! جربي تاني، مستنيكي 💜', ending: 'سواء عرفتي كل الإجابات أو لأ... إنتِ أصلًا أكتر حد يعرفني بجد.', questions: [
    { question: 'إيه أول حاجة شدتني ليكي؟', answers: ['شخصيتك وطريقتك ولطافتك', 'لون موبايلك', 'أول صورة بعتيها'], correct: 0 },
    { question: 'حكايتنا بدأت بسبب إيه؟', answers: ['صدفة بسبب مشكلة بين بنت أختي وصاحبتها', 'خروجة مترتبة', 'مقابلة في الجامعة'], correct: 0 },
    { question: 'إيه الطلب الأسطوري في أول مقابلة؟', answers: ['ميلك شيك فراولة', 'عصير مانجا', 'آيس كريم شوكولاتة'], correct: 0 },
    { question: 'بوبو كان بيحس بإيه وهو مسافر يشوف روزي؟', answers: ['قلبه طاير من الفرحة', 'إنه رايح امتحان', 'إنه ناسي حاجة في البيت'], correct: 0 },
    { question: 'الشخص اللي بيحبك نفسه في إيه أكتر حاجة؟', answers: ['يعيش الحياة الجاية جنب روزي ويتجوزها', 'يكسب مليون جنيه وخلاص', 'ينام يوم كامل'], correct: 0 }
  ] },
  secretsTitle: 'صندوق الأسرار 💌',
  secrets: ['بحب ذكاءك النفسي وطريقتك في فهم اللي حواليكي.', 'بحب طريقتك وإنتِ بتتدلعي، وحتى وإنتِ بتتريقي عليا 😂.', 'بحب إننا بنقدر نحكي لبعض حاجات ماينفعش نحكيها لحد تاني.', 'كل مرة بشوفك فيها بحس إني مش محتاج حاجة من الدنيا غير إنك تبقي في حضني.', 'إنتِ ساعدتيني أبقى مسؤول وأعرف يعني إيه أحب حد بجد.', 'حتى وأنا مشغول أو مضغوط، بتفضلي في بالي ووحشاني.'],
  wheelTitle: 'عجلة الحب 🎡', wheel: [{ title:'وعد مني', text:'هفضل أحاول أكون جنبك وأهتم بيكي.' },{ title:'أمنية', text:'نفسي نجرب كل حاجة جديدة سوا.' },{ title:'اعتراف', text:'إنتِ وحشاني حتى وإحنا لسه مخلصين كلام.' },{ title:'ضحكة', text:'الميلك شيك فراولة لسه محتاج اعتذار رسمي 😂.' },{ title:'حلم', text:'نفسي نبقى في بيت واحد ونكمل حياتنا سوا.' },{ title:'مفاجأة', text:'ليكي حضن كبير متشال لحد ما أشوفك ❤️.' }],
  promisesTitle: 'وعود من قلبي 🤍', promises: ['أوعدك إني أحافظ عليكي وأحترم مشاعرك.', 'أوعدك إني أشتغل على نفسي علشان أهتم بيكي بالطريقة اللي تستحقيها.', 'أوعدك إني أفضل أحبك وأحاول أصلح أي بعد يحصل بينا.', 'أوعدك إني أسعى معاكي علشان نعيش حياة أحسن.', 'أوعدك إني أكون جنبك وإنتِ بتكتشفي نفسك، وأشجعك في خطواتك.'], promisesEnding: 'مش مجرد كلام حلو... دي حاجات أنا عايز أثبتها ليكي بأفعالي.',
  unlock: { title:'افتحي قلبي 🔐', description:'لمي ٥ قلوب صغيرة وافتحي الرسالة... أو روحي للرسالة وقت ما تحبي.', message:'في حاجة عبده عايز يقولها لسارة من زمان... ومحتاج منك تقريها بقلبك.', button:'اقري رسالة عبده ❤️', skip:'تخطي اللعبة للرسالة' },
  letter: { title: 'رسالتي ليكي يا قطتي', text: `ايه الأخبار

بما انك وصلتي هنا يبقي دي رسالتي ليكي

الكلام مش هيبقي مترتب بس....

اول حاجه عايز اقولك اني بحبك اوي وانك بجد البنت الوحيده اللي حبيتها والوحيده اللي عايزها تكون معايا في حياتي والوحيده اللي راضي ان هي تتعبني معاها واللي افضل احاول عشانها طول عمري

تاني حاجه عارف اننا بعاد عن بعض اوي الفتره دي وعارف انك مفكراني مش مهتم بيكي وان قدام عدم الاهتمام ده هيزيد لما اسافر واننا هنبعد عن بعض اكتر

بس احب اطمنك ان حتي الاوقات اللي ببقي مضغوط فيها ومش قادر اهتم بنفس الطريقة بتاعتنا دايما انتي بتبقي في بالي ودايما بفكر فيكي ودايما بتبقي تفكيري الأول ودايما ببقي شايف انك اهم حاجه فيحياتي انا بس لما بتشغل بيبقي عشان حياتنا قدام ومش هقولك عشان نحقق او منحققش بس عشان تبقي حياتنا أفضل وعشان انا بحبك ونفسي أكون معاكي قريب اوي

تالت حاجه هي ان حتي ده مش هسمحله يحصل هحاول بكل الطرق نقرب تاني من بعض ومش بلومك علي اي حاجه احنا فيها دلوقتي انا اللي غلطت وانا اللي مسؤوليتي ارجعنا تاني واصلح البعد ده

بس اللي عايزك تبقي عارفاه وتبقي مطمنه منه اني بحبك وانك دايما وحشاني ودايما نفسي انتي تبقي معايا ونفسي كل لحظه جديده في حياتي اللي جايه قدام تبقي انتي اللي جنبي فيها مش عايز ابقي لوحدي ومش عايز حد غيرك جنبي ومعايا

حابب اننا نجرب كل حاجه جديده سوا وحابب اننا نتجنن سوا وحابب اني ابقي جنبك في كل خطوه في حياتك

ومش زي منتي ما قولتي انه صعب اكون معاكي وانتي بتكتشفي نفسك او انك جايه عليا بالعكس انا بحب ابقي جنبك وحابب اكون معاكي في رحلتك دي وحابب اني اكون الداعم والنشجع الأول ليكي لاني بحبك ولانك فعلا كل حاجه فيكي حلوه مفيش اي حاجه مضايقاني

وبالنسبة لموضوع انك غلطتي انك اتكلمتي معايا بالليل مش هبرر بس هقولك انك مغلطتيش انتي لو طلبتي مني عيني هديهالك وحتي من غير ما تطلبي انتي في اي وقت باي طريقة وقتي وحياتي كلها ملكك

واخر حاجه هي اني بعتبرك صاحبتي وحبيبتي ومراتي وبنتي وكمان ماما😂😂❤️

بحبك أوي`, ending: 'بحبك اوي يا روزي وهفضل أحبك ❤️', signature: 'من عبده، اللي نفسه يكمل كل أيامه معاكي.' }
}

/**
 * Final, versioned gift copy supplied by the owner. The merge keeps any
 * future schema fields from the fallback while preserving every JSON string
 * and line break verbatim for first-time visitors.
 */
export const defaultContent: GiftContent = {
  ...fallbackContent,
  ...(finalContent as Partial<GiftContent>),
  names: { ...fallbackContent.names, ...finalContent.names },
  intro: { ...fallbackContent.intro, ...finalContent.intro },
  story: { ...fallbackContent.story, ...finalContent.story },
  quiz: { ...fallbackContent.quiz, ...finalContent.quiz, questions: finalContent.quiz.questions },
  music: { ...defaultMusic, ...finalContent.music },
  loveGame: { ...defaultLoveGame, ...finalContent.loveGame },
  unlock: { ...fallbackContent.unlock, ...finalContent.unlock },
  letter: { ...fallbackContent.letter, ...finalContent.letter }
}
