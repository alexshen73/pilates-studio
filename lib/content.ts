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
    posts: Array<{ title: string; excerpt: string }>;
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
      title: "Баланс, сила та гнучкість у комфортному онлайн-форматі",
      subtitle:
        "Тренування українською та англійською для початківців і тих, хто хоче безпечно повернутися до активності.",
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
        "Пілатес допомагає розвинути контроль тіла, поставу та стабільність корпусу без перевантаження суглобів.",
      points: [
        "Покращення мобільності та усвідомленого руху",
        "Зменшення напруження в спині та шиї",
        "М'яке зміцнення м'язового корсету",
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
        "Професійний супровід з увагою до вашого рівня, стану спини та цілей. Кожне заняття адаптується під вас.",
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
      description: "SEO-статті для органічного трафіку та прогріву аудиторії.",
      posts: [
        {
          title: "Пілатес для спини: з чого почати безпечно",
          excerpt: "Ключові принципи, базові вправи та типові помилки на старті.",
        },
        {
          title: "Пілатес після пологів: коли можна починати",
          excerpt: "Орієнтири по термінах, м'яке відновлення та рекомендації за рівнями.",
        },
        {
          title: "Ранкова 15-хвилинна практика для офісної спини",
          excerpt: "Короткий комплекс для мобільності грудного відділу і розвантаження шиї.",
        },
      ],
      cta: "Дивитися всі статті",
    },
    faq: {
      title: "Поширені питання",
      items: [
        {
          q: "Чи підходить пілатес новачкам?",
          a: "Так, план будується від базового рівня та поступово ускладнюється.",
        },
        {
          q: "Що потрібно для онлайн-заняття?",
          a: "Килимок, стабільний інтернет та 1.5-2 м вільного простору.",
        },
        {
          q: "Чи можна займатися при болях у спині?",
          a: "У більшості випадків так, але зі стартовою оцінкою стану і м'якою адаптацією вправ.",
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
    pageTitle: "Online Pilates with a Certified Trainer",
    pageDescription:
      "Bilingual online pilates sessions: private coaching, small groups, video lessons, and trainer support.",
    nav: {
      about: "About Pilates",
      whoFor: "Who It's For",
      trainer: "Trainer",
      testimonials: "Testimonials",
      formats: "Formats",
      blog: "Blog",
      faq: "FAQ",
      contacts: "Contacts",
    },
    hero: {
      badge: "Certified Pilates Trainer",
      title: "Build balance, strength, and mobility in a calm online format",
      subtitle:
        "Sessions in Ukrainian and English for beginners and people returning to movement safely.",
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
        "Pilates builds body awareness, posture, and core stability without excessive joint stress.",
      points: [
        "Better mobility and mindful movement",
        "Less tension in neck and lower back",
        "Sustainable full-body strength",
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
      title: "About the Trainer",
      description:
        "Professional guidance tailored to your level, back condition, and personal goals. Every session is adapted to you.",
      photoNote: "Trainer photos can be added after final visual selection.",
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
      description: "SEO-focused articles to grow organic traffic and trust.",
      posts: [
        {
          title: "Pilates for Back Pain: A Safe Starting Plan",
          excerpt: "Core principles, beginner moves, and common mistakes to avoid.",
        },
        {
          title: "Postpartum Pilates: When and How to Begin",
          excerpt: "Recovery timelines, gentle progress, and practical guidance.",
        },
        {
          title: "A 15-Minute Morning Pilates Flow for Desk Workers",
          excerpt: "A short routine for spine mobility and neck tension relief.",
        },
      ],
      cta: "View all articles",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Is pilates suitable for beginners?",
          a: "Yes. We start from fundamentals and scale intensity step by step.",
        },
        {
          q: "What do I need for online classes?",
          a: "A mat, stable internet, and around 1.5-2 meters of free space.",
        },
        {
          q: "Can I train if I have back pain?",
          a: "In most cases yes, after a quick assessment and with exercise modifications.",
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
