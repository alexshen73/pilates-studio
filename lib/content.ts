import type { Locale } from "@/lib/i18n";

export type LandingContent = {
  localeName: string;
  pageTitle: string;
  pageDescription: string;
  nav: {
    about: string;
    whoFor: string;
    trainer: string;
    testimonials: string;
    formats: string;
    blog: string;
    faq: string;
    contacts: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    stats: Array<{ label: string; value: string }>;
  };
  about: {
    title: string;
    description: string;
    points: string[];
  };
  whoFor: {
    title: string;
    description: string;
    groups: Array<{ title: string; text: string }>;
  };
  trainer: {
    title: string;
    description: string;
    photoNote: string;
    credentials: string[];
  };
  testimonials: {
    title: string;
    items: Array<{ quote: string; author: string }>;
  };
  formats: {
    title: string;
    cards: Array<{ title: string; description: string }>;
  };
  blog: {
    title: string;
    description: string;
    posts: Array<{ slug: string; title: string; excerpt: string; content: string[] }>;
    cta: string;
  };
  faq: {
    title: string;
    items: Array<{ q: string; a: string }>;
  };
  contacts: {
    title: string;
    description: string;
    instagram: string;
    tiktok: string;
    youtube: string;
    telegram: string;
    email: string;
    phone: string;
  };
  footer: string;
};

export const content: Record<Locale, LandingContent> = {
  uk: {
    localeName: "Українська",
    pageTitle: "Пілатес онлайн з сертифікованим тренером",
    pageDescription:
      "Двомовні онлайн-заняття з пілатесу: індивідуальні програми, малі групи, відеоуроки та підтримка тренера.",
    nav: {
      about: "Про пілатес",
      whoFor: "Для кого",
      trainer: "Тренер",
      testimonials: "Відгуки",
      formats: "Формати",
      blog: "Блог",
      faq: "Питання",
      contacts: "Контакти",
    },
    hero: {
      badge: "Сертифікований тренер з пілатесу",
      title: "Баланс, сила та гнучкість у зручному для вас форматі",
      subtitle:
        "Працюємо онлайн, індивідуально та в малих групах — українською й англійською, для початківців і тих, хто повертається до активності.",
      primaryCta: "Записатися на пробне заняття",
      secondaryCta: "Дивитися YouTube",
      stats: [
        { label: "Формат", value: "1:1 та групи" },
        { label: "Мови", value: "UA / EN" },
        { label: "Рівень", value: "Beginner +" },
      ],
    },
    about: {
      title: "Що таке пілатес",
      description:
        "Пілатес — це більше, ніж тренування. Це поєднання мистецтва руху, наукового підходу та філософії турботи про тіло на кожному етапі життя. Метод, створений Джозефом Пілатесом, базується на точних і усвідомлених рухах, що зміцнюють м’язи, покращують поставу та вирівнювання тіла, а також підвищують загальну фізичну підготовку. У роботі я спираюся на класичні принципи пілатесу, адаптуючи кожне заняття під ваші потреби, рівень і самопочуття. Незалежно від того, чи ви хочете стати сильнішими, відновитися після перерви або травми, чи просто рухатися вільніше, програма підбирається так, щоб ви безпечно прогресували у комфортному темпі.",
      points: [
        "Менше болю та напруги у спині й шиї",
        "Рівна постава та сильний м'язовий корсет",
        "Гнучкість і мобільність без різких навантажень",
        "Відчутний результат вже за 4–6 тижнів регулярних занять",
      ],
    },
    whoFor: {
      title: "Для кого підходить",
      description: "Програми адаптуються під рівень, ритм життя та індивідуальні цілі.",
      groups: [
        {
          title: "Початківці",
          text: "Якщо ви тільки починаєте, тренування стартують з простих і безпечних базових рухів.",
        },
        {
          title: "Після перерви",
          text: "Повернення до активності після тривалої паузи, стресу або малої рухливості.",
        },
        {
          title: "Офісний ритм",
          text: "Для тих, хто багато сидить і хоче зменшити дискомфорт у шиї, плечах та попереку.",
        },
      ],
    },
    trainer: {
      title: "Про тренера",
      description:
        "Мій шлях у пілатес почався не з професії, а з особистої потреби відновитися після насичених учительських буднів. Спочатку це було хобі, яке допомагало зняти напруження, повернути енергію та відчути тіло по-новому. З часом я побачила, наскільки глибоко пілатес змінює самопочуття, поставу й якість життя, і вирішила перейти на професійний рівень. Я пройшла сертифіковане навчання, здобула необхідні знання та практику, і сьогодні допомагаю іншим рухатися безпечно, усвідомлено й з результатом.",
      photoNote: "Фото тренера додамо після підбору фінальних візуалів.",
      credentials: [
        "Міжнародна сертифікація з пілатесу",
        "Досвід роботи з групами та індивідуальними клієнтами",
        "Фокус на безпечній техніці та поступовому прогресі",
      ],
    },
    testimonials: {
      title: "Відгуки клієнтів",
      items: [
        {
          quote:
            "За 5 тижнів перестала відчувати постійну напругу в попереку, а тіло стало набагато рухливішим.",
          author: "Олена, 34",
        },
        {
          quote:
            "Подобається структурний підхід і комфортний темп. Навіть онлайн є відчуття персональної уваги.",
          author: "Ірина, 29",
        },
        {
          quote:
            "Після робочого дня з'являється легкість у спині, а постава реально покращилась.",
          author: "Марія, 41",
        },
      ],
    },
    formats: {
      title: "Формати занять",
      cards: [
        {
          title: "Індивідуальні онлайн",
          description: "Персональна програма, контроль техніки та регулярний трекінг прогресу.",
        },
        {
          title: "Малі групи",
          description: "Динамічні тренування в мотиваційному середовищі з увагою до кожного.",
        },
        {
          title: "Відеоуроки",
          description: "Готові заняття на YouTube та в закритих добірках для самостійної практики.",
        },
      ],
    },
    blog: {
      title: "Блог",
      description: "",
      posts: [
        {
          slug: "pilates-pry-bolyu-v-spyni-yak-pochaty-bezpechno",
          title: "Пілатес при болю в спині: як почати безпечно",
          excerpt: "Що робити, якщо спина болить щодня: базові принципи, яких вправ уникати на старті, та як підібрати м’яке навантаження без загострень.",
          content: [
            "Біль у спині не завжди означає, що рух заборонений. Часто навпаки: правильно підібрана активність допомагає зменшити напруження, повернути мобільність і поступово відновити комфорт у повсякденних рухах.",
            "Починати варто зі спокійного темпу та короткої оцінки стану: де саме відчувається дискомфорт, які рухи його провокують, як тіло реагує на навантаження. На цьому етапі важливо не гнатися за амплітудою, а відновлювати контроль руху та стабільність корпусу.",
            "У стартовому періоді ми робимо акцент на диханні, м’якій мобілізації хребта, активації глибоких м’язів живота й сідниць. Саме така база знижує зайве навантаження на поперек і допомагає тілу рухатися без компенсацій.",
            "Чого краще уникати на початку: різких скручувань, ривкових рухів, тривалого утримання через біль і вправ, після яких симптоми посилюються. Орієнтир простий: після заняття має бути відчуття легкості, а не загострення.",
            "Стабільний прогрес зазвичай дає регулярність: 2-3 короткі практики на тиждень працюють краще, ніж рідкісні інтенсивні сесії. Так тіло встигає адаптуватися, а спина отримує безпечне, послідовне відновлення.",
          ],
        },
        {
          slug: "pilates-pislya-perervy-myake-povernennya-u-formu",
          title: "Пілатес після перерви: м’яке повернення у форму",
          excerpt: "Покроковий план на перші 4 тижні: як повернути тонус, витривалість і впевненість у русі без стресу для тіла.",
          content: [
            "Після довгої паузи найгірша стратегія - одразу повертатися до звичного навантаження. Тілу потрібен час, щоб знову відчути опору, ритм і координацію, тому в пілатесі ми повертаємо форму поступово.",
            "Перший тиждень - адаптація: короткі заняття 15-20 хвилин, базові вправи, дихання й м’яка мобілізація. Головна ціль - повернути відчуття тіла та зняти напруження після сидячого дня.",
            "Другий тиждень - стабілізація: додаємо вправи на центр тіла, баланс і контроль положення таза та лопаток. Рухи залишаються безпечними, але стають трохи більш структурованими.",
            "Третій і четвертий тиждень - плавне посилення: збільшуємо тривалість занять, додаємо витривалісні зв’язки й працюємо над якістю техніки. Саме на цьому етапі зазвичай з’являється помітна легкість у спині та краща постава.",
            "Щоб закріпити результат, важливо зберігати регулярність і реалістичний графік. Краще 2-3 стабільні практики щотижня, ніж «ідеальний план», який складно підтримувати.",
          ],
        },
        {
          slug: "15-hvylyn-pilatesu-dlya-ofisnoyi-spyny",
          title: "15 хвилин пілатесу для офісної спини",
          excerpt: "Короткий комплекс для шиї, плечей і попереку, який легко вбудувати в робочий день, щоб зменшити затиски та втому.",
          content: [
            "Якщо ви багато працюєте сидячи, тіло накопичує напруження в шиї, грудному відділі та попереку. Хороша новина: навіть 15 хвилин усвідомленого руху можуть відчутно змінити самопочуття вже в той самий день.",
            "Міні-комплекс можна побудувати так: 3-4 хвилини дихання та мобілізації грудного відділу, 5-6 хвилин на активацію центру тіла і сідниць, ще 4-5 хвилин на м’яке розвантаження шиї та попереку.",
            "Під час вправ важливо стежити за технікою: рухатися плавно, без ривків, тримати нейтральне положення корпусу і не працювати через різкий біль. Якість руху тут важливіша за швидкість.",
            "Такий формат легко вставити в робочий графік: до початку дня, у перерві між дзвінками або ввечері після роботи. Головне - робити регулярно, а не чекати моменту, коли спина вже «забилась».",
            "Регулярна коротка практика допомагає зменшити втому, покращити поставу і повернути відчуття легкості в тілі навіть при насиченому графіку.",
          ],
        },
      ],
      cta: "Дивитися всі статті",
    },
    faq: {
      title: "Поширені питання",
      items: [
        {
          q: "Чи підходить пілатес новачкам?",
          a: "Так, пілатес добре підходить новачкам. На старті тренер проводить коротке тестування вашого рівня підготовки, мобільності та техніки руху, після чого складає індивідуальну програму саме під ваші цілі. Ми починаємо з базових і безпечних вправ та поступово ускладнюємо навантаження у комфортному для вас темпі.",
        },
        {
          q: "Що потрібно для онлайн-заняття?",
          a: "Килимок, стабільний інтернет та 1.5-2 м вільного простору.",
        },
        {
          q: "Чи можна займатися при болях у спині?",
          a: "У більшості випадків так, але лише після короткої первинної оцінки стану. На старті тренер уточнює ваші симптоми, рівень болю, обмеження в рухах і попередній досвід занять, щоб підібрати безпечний формат навантаження. Програма будується м’яко: з акцентом на стабілізацію, дихання, мобільність і контроль техніки без різких або провокуючих рухів. У процесі заняття адаптуються під самопочуття, а навантаження підвищується поступово, щоб зменшити дискомфорт і повернути впевненість у русі.",
        },
      ],
    },
    contacts: {
      title: "Контакти",
      description:
        "Напишіть для консультації, вибору формату і запису на найближче заняття.",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube канал",
      telegram: "Telegram",
      email: "Email",
      phone: "Телефон",
    },
    footer: "Онлайн-пілатес. Усі права захищені.",
  },
  en: {
    localeName: "English",
    pageTitle: "Online Pilates with a Certified Coach",
    pageDescription:
      "Bilingual online pilates sessions: private coaching, small groups, video lessons, and coach support.",
    nav: {
      about: "About Pilates",
      whoFor: "Who It's For",
      trainer: "Coach",
      testimonials: "Testimonials",
      formats: "Formats",
      blog: "Blog",
      faq: "FAQ",
      contacts: "Contacts",
    },
    hero: {
      badge: "Certified Pilates Coach",
      title: "Build balance, strength, and mobility in a format that fits you",
      subtitle:
        "Train online, privately, or in small groups - in Ukrainian and English, for beginners and those returning to movement.",
      primaryCta: "Book a Trial Session",
      secondaryCta: "Watch on YouTube",
      stats: [
        { label: "Format", value: "1:1 and groups" },
        { label: "Languages", value: "UA / EN" },
        { label: "Level", value: "Beginner +" },
      ],
    },
    about: {
      title: "What Is Pilates",
      description:
        "Pilates is more than a workout. It is a blend of movement art, science, and a lifelong philosophy of body care. Developed by Joseph Pilates, this method is built on intentional, precise movement that strengthens the body, improves alignment and posture, and supports overall physical conditioning. In my practice, I stay true to core classical Pilates principles while tailoring each session to your needs, level, and current condition. Whether your goal is to build strength, recover after a break or injury, or simply move with more ease, each program is designed to help you progress safely and confidently.",
      points: [
        "Less pain and tension in your back and neck",
        "Better posture and a stronger core",
        "Mobility and flexibility without harsh strain",
        "Noticeable results in just 4-6 weeks of consistent practice",
      ],
    },
    whoFor: {
      title: "Who It's For",
      description: "Each plan is adjusted to your level, schedule, and training goals.",
      groups: [
        {
          title: "Beginners",
          text: "A safe and clear introduction to fundamentals with gradual progress.",
        },
        {
          title: "After a Break",
          text: "A supportive return to movement after inactivity or a long pause.",
        },
        {
          title: "Desk-Based Lifestyle",
          text: "Relief-focused routines for neck, shoulders, and lower-back tension.",
        },
      ],
    },
    trainer: {
      title: "About the Coach",
      description:
        "My journey into Pilates started not as a profession, but as a personal need to recover after intense school-teaching days. At first, it was a hobby that helped me release tension, restore energy, and reconnect with my body. Over time, I saw how deeply Pilates can transform well-being, posture, and overall quality of life, and I decided to take it to the next level. I completed certified training, gained the necessary knowledge and practical experience, and today I help others move safely, mindfully, and with real results.",
      photoNote: "Coach photos can be added after final visual selection.",
      credentials: [
        "International pilates certification",
        "Experience with group classes and private clients",
        "Focus on safe technique and gradual progress",
      ],
    },
    testimonials: {
      title: "Client Feedback",
      items: [
        {
          quote:
            "After five weeks my lower-back tension dropped noticeably, and movement feels easier every day.",
          author: "Olena, 34",
        },
        {
          quote:
            "The coaching is structured and encouraging. Even online, the sessions feel very personal.",
          author: "Iryna, 29",
        },
        {
          quote:
            "My posture improved and I finally feel less stiffness after long desk-work days.",
          author: "Maria, 41",
        },
      ],
    },
    formats: {
      title: "Training Formats",
      cards: [
        {
          title: "Private Online Sessions",
          description: "Personalized plan, technique feedback, and progress tracking.",
        },
        {
          title: "Small Group Classes",
          description: "Motivating sessions with individual attention.",
        },
        {
          title: "Video Lessons",
          description: "YouTube workouts and curated lesson libraries for self-practice.",
        },
      ],
    },
    blog: {
      title: "Blog",
      description: "",
      posts: [
        {
          slug: "pilates-for-back-pain-how-to-start-safely",
          title: "Pilates for Back Pain: How to Start Safely",
          excerpt: "What to do if your back hurts daily: core principles, which exercises to avoid at the beginning, and how to choose gentle loads without flare-ups.",
          content: [
            "Back pain does not always mean movement is off-limits. In many cases, the right kind of movement helps reduce tension, restore mobility, and gradually improve comfort in daily life.",
            "A safe start begins with a quick assessment: where discomfort appears, which movements trigger symptoms, and how your body responds to load. At this stage, the goal is not range or intensity - it is control and stability.",
            "Early sessions should focus on breathing, gentle spinal mobility, and activation of deep core and glute muscles. This foundation reduces unnecessary stress on the lower back and supports better movement patterns.",
            "What to avoid at first: sharp twists, jerky transitions, pushing through pain, and any exercise that increases symptoms afterward. A good sign is feeling lighter after practice, not worse.",
            "Consistency beats intensity. Two or three short sessions per week usually bring better results than occasional hard workouts, because your body has time to adapt safely.",
          ],
        },
        {
          slug: "pilates-after-a-break-a-gentle-return-to-shape",
          title: "Pilates After a Break: A Gentle Return to Shape",
          excerpt: "A step-by-step plan for the first 4 weeks to rebuild tone, endurance, and confidence in movement without stressing your body.",
          content: [
            "After a long break, jumping straight back into your old routine is usually the fastest way to overload your body. Pilates works better with a gradual return that rebuilds control, strength, and confidence.",
            "Week one is adaptation: short 15-20 minute sessions, basic movements, breathing, and mobility. The aim is to reconnect with your body and release accumulated tension.",
            "Week two is stabilization: add core work, balance, and better control of pelvis and shoulder position. Exercises remain gentle, but become more structured.",
            "Weeks three and four are progressive loading: extend session time, add endurance-focused sequences, and refine technique. This is often when posture improves and back stiffness starts to decrease noticeably.",
            "To keep the progress, choose a realistic schedule you can sustain. Two or three consistent sessions each week are far more effective than an ambitious plan you cannot maintain.",
          ],
        },
        {
          slug: "15-minutes-of-pilates-for-desk-related-back-tension",
          title: "15 Minutes of Pilates for Desk-Related Back Tension",
          excerpt: "A short routine for your neck, shoulders, and lower back that fits into a workday and helps reduce stiffness and fatigue.",
          content: [
            "If you spend most of your day sitting, tension tends to build up in your neck, upper back, and lower back. The good news is that even 15 minutes of mindful movement can noticeably improve how you feel.",
            "A simple sequence can look like this: 3-4 minutes of breathing and thoracic mobility, 5-6 minutes of core and glute activation, then 4-5 minutes of gentle release for neck and lower back.",
            "Focus on quality: smooth transitions, no sudden moves, neutral alignment, and no pushing through sharp pain. In this format, precision matters more than speed.",
            "You can fit this into your day before work, between meetings, or in the evening. The key is regular practice, not waiting until discomfort becomes severe.",
            "Short, consistent sessions help reduce fatigue, improve posture, and bring back a sense of lightness even during high-workload weeks.",
          ],
        },
      ],
      cta: "View all articles",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Is pilates suitable for beginners?",
          a: "Yes, absolutely. We start with a short assessment of your current level, mobility, and movement quality, then build a personalized program around your goals. You begin with safe fundamentals and progress step by step at a comfortable pace.",
        },
        {
          q: "What do I need for online classes?",
          a: "A mat, stable internet, and around 1.5-2 meters of free space.",
        },
        {
          q: "Can I train if I have back pain?",
          a: "In most cases, yes - but only after a short initial assessment. At the start, the coach clarifies your symptoms, pain level, movement limitations, and previous training experience to choose a safe training format. The program is built gently, with a focus on stabilization, breathing, mobility, and technique control without sharp or provocative movements. Sessions are adapted to how you feel, and the load increases gradually to reduce discomfort and restore confidence in movement.",
        },
      ],
    },
    contacts: {
      title: "Contacts",
      description: "Reach out for consultation, format selection, and scheduling.",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube Channel",
      telegram: "Telegram",
      email: "Email",
      phone: "Phone",
    },
    footer: "Online Pilates. All rights reserved.",
  },
};
