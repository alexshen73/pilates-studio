import type { Locale } from "@/lib/i18n";

export const pricingEnabled = true;

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
    pricing: string;
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
  pricing: {
    title: string;
    description: string;
    note: string;
    cta: string;
    groups: Array<{
      name: string;
      description: string;
      items: Array<{ name: string; price: string }>;
    }>;
  };
  blog: {
    title: string;
    description: string;
    posts: Array<{ slug: string; title: string; excerpt: string; publishedDate: string; content: string[] }>;
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
      pricing: "Тарифи",
      blog: "Блог",
      faq: "Питання",
      contacts: "Контакти",
    },
    hero: {
      badge: "Сертифікований тренер з пілатесу",
      title: "Баланс, сила та гнучкість у зручному для вас форматі",
      subtitle:
        "Працюємо онлайн, індивідуально та в малих групах — українською й англійською, для початківців і тих, хто повертається до активності.",
      primaryCta: "Отримати персональну пропозицію",
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
        "Мій шлях у пілатес почався не з професії, а з особистої потреби відновитися після насичених учительських буднів. Спочатку це було хобі, яке допомагало зняти напруження, повернути енергію та відчути тіло по-новому. З часом я побачила, наскільки глибоко пілатес змінює самопочуття, поставу й якість життя, і вирішила перейти на професійний рівень. Я пройшла сертифіковане навчання, здобула необхідні знання та практику і сьогодні допомагаю іншим рухатися безпечно, усвідомлено й з результатом.",
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
    pricing: {
      title: "Тарифи",
      description: "Прозорі ціни без прихованих умов. Перша консультація — безкоштовна: підберемо формат і складемо план занять саме під вашу мету, рівень і графік.",
      note: "Для порівняння: групове заняття пілатесу в Європі коштує €15–30, індивідуальне — €50–80.",
      cta: "Записатися",
      groups: [
        {
          name: "Відеозаняття в записі",
          description: "Записані тренування по 45–50 хвилин на приватному YouTube — займайтеся, коли зручно.",
          items: [
            { name: "1 тренування · доступ 1 тиждень", price: "20 €" },
            { name: "3 тренування · доступ 2 тижні", price: "50 €" },
            { name: "6 тренувань · доступ 1 місяць", price: "120 €" },
            { name: "12 тренувань · доступ 2 місяці", price: "220 €" },
          ],
        },
        {
          name: "Програма «10 тренувань»",
          description: "Готовий курс із 10 записаних тренувань — послідовна програма від простого до складного з підтримкою тренерки.",
          items: [
            { name: "Стандарт · доступ 2 місяці + 1 консультація чи тренування", price: "200 €" },
            { name: "Група · доступ 2 місяці + Telegram-канал", price: "250 €" },
            { name: "VIP · доступ 3 місяці + корегування програми", price: "400 €" },
          ],
        },
        {
          name: "Онлайн-заняття наживо",
          description: "Тренування з тренеркою в реальному часі, 1 година.",
          items: [
            { name: "Разове тренування", price: "25 €" },
            { name: "Абонемент на 8 тренувань · 2 рази на тиждень", price: "180 €" },
          ],
        },
      ],
    },
    blog: {
      title: "Блог",
      description: "Практичні поради з пілатесу: як почати безпечно, що робити при болю в спині та як зберігати форму у щоденному ритмі.",
      posts: [
        {
          slug: "pilates-pry-bolyu-v-spyni-yak-pochaty-bezpechno",
          title: "Пілатес при болю в спині: як почати безпечно",
          excerpt: "Що робити, якщо спина болить щодня: базові принципи, яких вправ уникати на старті, та як підібрати м’яке навантаження без загострень.",
          publishedDate: "2026-05-18T09:00:00+03:00",
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
          publishedDate: "2026-05-25T09:00:00+03:00",
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
          publishedDate: "2026-06-01T09:00:00+03:00",
          content: [
            "Якщо ви багато працюєте сидячи, тіло накопичує напруження в шиї, грудному відділі та попереку. Хороша новина: навіть 15 хвилин усвідомленого руху можуть відчутно змінити самопочуття вже в той самий день.",
            "Міні-комплекс можна побудувати так: 3-4 хвилини дихання та мобілізації грудного відділу, 5-6 хвилин на активацію центру тіла і сідниць, ще 4-5 хвилин на м’яке розвантаження шиї та попереку.",
            "Під час вправ важливо стежити за технікою: рухатися плавно, без ривків, тримати нейтральне положення корпусу і не працювати через різкий біль. Якість руху тут важливіша за швидкість.",
            "Такий формат легко вставити в робочий графік: до початку дня, у перерві між дзвінками або ввечері після роботи. Головне - робити регулярно, а не чекати моменту, коли спина вже «забилась».",
            "Регулярна коротка практика допомагає зменшити втому, покращити поставу і повернути відчуття легкості в тілі навіть при насиченому графіку.",
          ],
        },
        {
          slug: "pilates-dlya-skhudnennya-chy-spravdi-vin-pratsyuye",
          title: "Пілатес для схуднення: чи справді він працює",
          excerpt: "Чи можна змінити тіло та скинути вагу за допомогою пілатесу: скільки калорій спалює заняття, які вправи працюють найкраще і що додати в рутину для реального результату.",
          publishedDate: "2026-07-13T09:00:00+03:00",
          content: [
            "Пілатес рідко асоціюється зі схудненням - і це справедливо, якщо очікувати від нього ефекту інтенсивного кардіо. Але це не означає, що він не впливає на тіло: регулярна практика змінює тонус м’язів, поставу та силует, навіть якщо цифра на вагах рухається повільно.",
            "Для порівняння: заняття пілатесом середньої інтенсивності спалює приблизно 150-250 ккал за годину - менше, ніж біг чи інтервальне тренування, але цілком порівнянно зі швидкою ходьбою. Тому пілатес краще розглядати не як спосіб «спалити жир», а як інструмент, що змінює композицію тіла: менше жиру, більше сухої м’язової маси.",
            "Певні вправи працюють особливо ефективно для тонусу й витрати енергії. «Сотня» (Hundred) прискорює пульс і активує прес та дихання з перших хвилин заняття. Планка та її варіації залучають майже все тіло одночасно, а «розкручування хребта» (Roll-Up) тренує глибокий кор, який відповідає за підтягнутий живіт і рівну поставу.",
            "Якщо мета - саме зниження ваги, пілатес найкраще працює в парі з іншою активністю: 2-3 заняття пілатесом на тиждень плюс щоденні 20-30 хвилин ходьби або легкого кардіо. Харчування при цьому залишається головним фактором дефіциту калорій - пілатес створює умови для результату, але не замінює контроль раціону.",
            "Реалістичний таймлайн виглядає так: перші 1-2 тижні - більше енергії й легкості в тілі; 4-6 тижнів - зміни в замірах і тому, як сидить одяг; 8-12 тижнів регулярної практики - помітні зміни силуету, тонусу та витривалості.",
            "Варто розвіяти два поширені міфи. Перший - що пілатес «спалює жир у певній зоні»: локального жироспалення не існує, тіло втрачає жир рівномірно за загальним дефіцитом калорій. Другий - що пілатес повністю замінює кардіо: для максимального дефіциту калорій кардіо-навантаження або більш висока щоденна активність усе ж потрібні.",
            "Головна перевага пілатесу в контексті схуднення - стійкість: це формат, який легко підтримувати роками без вигорання й перевантаження суглобів. Довгострокова регулярність у поєднанні з харчуванням і базовою активністю зазвичай дає кращий і стабільніший результат, ніж короткі інтенсивні спроби.",
          ],
        },
        {
          slug: "pilates-chy-yoga-u-chomu-riznytsya-i-shcho-obraty",
          title: "Пілатес чи йога: у чому різниця і що обрати",
          excerpt: "Порівнюємо цілі, вправи та відчуття від тренувань за конкретними ситуаціями - і розказуємо, коли краще обрати одне, а коли поєднати обидва напрями.",
          publishedDate: "2026-07-20T09:00:00+03:00",
          content: [
            "Пілатес і йога часто плутають, бо обидва напрями м’які, працюють з тілом усвідомлено і не потребують важкого обладнання. Але мета й фокус у них різні: пілатес більше про силу, контроль і стабільність корпусу, а йога - про гнучкість, дихання і ментальний баланс.",
            "У пілатесі рухи структуровані й повторювані, з чітким акцентом на техніку: активація глибоких м’язів живота, контроль положення тіла, точність виконання. Типові вправи - «сотня», планка, місток (Bridge) - націлені на силу кора, сідниць і стабілізаторів хребта.",
            "Йога, натомість, будується навколо утримання поз (асан) на кшталт «собаки мордою вниз» чи «пози дитини», розтяжки та дихальних технік (пранаями), з більшим акцентом на релаксацію й гнучкість, ніж на силове навантаження корпусу.",
            "Порівняємо за конкретними ситуаціями. Болить спина від сидячої роботи - краще підійде пілатес: він зміцнює м’язовий корсет, що стабілізує хребет. Потрібно заспокоїтись після стресового дня і розтягнути затиснуті м’язи - тут сильніша йога з її диханням і повільними утриманнями поз. Хочете рівну поставу й підтягнутий кор - знову пілатес. Хочете покращити рухливість суглобів і зняти ментальне напруження - йога.",
            "Є й відмінність у темпі заняття: пілатес зазвичай динамічніший, з серіями повторень і рахунком дихання під рух, тоді як йога частіше передбачає тривале утримання поз і повільніші переходи.",
            "Обидва напрями знижують рівень стресу, але роблять це по-різному: пілатес - через фокус на точності руху й контролі, йога - через розслаблення й усвідомлене дихання в статичних позах.",
            "Насправді ці напрями чудово доповнюють один одного: пілатес дає силу й стабільність, а йога - гнучкість і відновлення. Багато клієнтів поєднують обидва формати впродовж тижня - наприклад, 2 заняття пілатесом і 1 заняття йогою - щоб отримати збалансований ефект для тіла й самопочуття.",
          ],
        },
        {
          slug: "skilky-chasu-potribno-shchob-pobachyty-rezultat-vid-pilatesu",
          title: "Скільки часу потрібно, щоб побачити результат від пілатесу",
          excerpt: "Реалістичний таймлайн по тижнях: що відчувається вже після першого заняття, а що потребує кількох місяців регулярної практики.",
          publishedDate: "2026-07-27T09:00:00+03:00",
          content: [
            "Одне з найчастіших питань перед стартом - коли з’явиться результат. Чесна відповідь: перші зміни відчуваються швидше, ніж здається, але вони не завжди помітні ззовні одразу.",
            "Заняття 1-2: тіло ще вчиться. З’являється легкість після тренування, кращий контакт з диханням, трохи ширший діапазон руху в суглобах. М’язового результату тут ще немає - це нервова система вчиться краще керувати рухом.",
            "Тиждень 2-4 (регулярність 2-3 рази на тиждень): менше ранкової скутості, менше напруги в попереку й шиї після робочого дня, зростає витривалість - заняття, яке спочатку здавалось складним, дається легше.",
            "Тиждень 4-6: з’являється відчутніший прогрес у силі кора - планка тримається довше, вправи на баланс стають стабільнішими. Саме на цьому етапі одяг зазвичай сидить інакше, навіть якщо вага на вагах майже не змінилась.",
            "Місяць 2-3: формується видимий тонус і рельєф, постава вирівнюється без свідомих зусиль, зникає більшість дискомфорту від сидячого способу життя. Це типовий термін, за який пілатес-спільнота й тренери орієнтуються на «перший видимий результат».",
            "Місяць 3+: тіло виходить на новий рівень - складніші вправи й варіації стають доступними, а базова версія програми відчувається як розминка. Прогрес триває, але вже потребує ускладнення навантаження, щоб не зупинитись на плато.",
            "Головний фактор швидкості результату - не інтенсивність, а регулярність. Два-три стабільні заняття щотижня протягом кількох місяців дають кращий і довготриваліший ефект, ніж рідкісні інтенсивні тренування раз на два тижні.",
          ],
        },
        {
          slug: "pilates-i-postava-yak-prybraty-sutulist-bez-bolyu",
          title: "Пілатес і постава: як прибрати сутулість без болю",
          excerpt: "Чому сутулість формується від сидячого способу життя, які конкретні вправи пілатесу повертають плечі й хребет у комфортне положення.",
          publishedDate: "2026-08-03T09:00:00+03:00",
          content: [
            "Сутулість рідко з’являється миттєво - вона формується роками сидячого способу життя, коли грудні м’язи вкорочуються, а м’язи середньої частини спини слабшають і перестають утримувати плечі у правильному положенні.",
            "Пілатес працює з поставою через два напрямки одразу: розтяжку й мобілізацію грудного відділу, який зазвичай затиснутий, та зміцнення м’язів між лопатками й глибокого м’язового корсета, які відповідають за стабільне положення хребта.",
            "Три вправи працюють особливо точково. «Розтяжка грудного відділу» (Chest Opener/Thoracic Extension) на валику чи подушці м’яко розкриває груди й знімає затиск. «Лебідь» (Swan) зміцнює розгиначі спини й привчає тіло тримати хребет у нейтральному положенні. «Зведення лопаток» (Scapular Squeeze) активує м’язи середньої частини спини, які найчастіше «сплять» у сутулих людей.",
            "Важливо не намагатися «випрямитись силою» - утримувати плечі назад свідомо кілька секунд не змінює звичку тіла. Натомість регулярне повторення цих вправ поступово тренує м’язову пам’ять, щоб рівне положення ставало природним, а не зусиллям.",
            "Перші зміни зазвичай відчуваються як менше напруги між лопатками й у шиї після робочого дня - вже за перший тиждень регулярної практики. Візуально рівніша постава з’являється трохи пізніше, за 3-4 тижні.",
            "Додатковий лайфхак: короткі 2-3-хвилинні паузи на мобільність грудного відділу прямо за робочим столом (кілька розворотів корпусу, зведення лопаток на стільці) підтримують ефект між повноцінними заняттями і не дають м’язам знову «застигнути».",
            "Найкраще працює поєднання таких коротких вправ протягом дня з регулярними повноцінними заняттями 2-3 рази на тиждень - так тіло отримує і миттєве розвантаження, і довгостроковий м’язовий баланс.",
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
          q: "Чи підходить пілатес для чоловіків?",
          a: "Так, звісно. Пілатес створив чоловік — Джозеф Пілатес, і спочатку метод розроблявся саме для чоловіків. Заняття розвивають силу центру тіла, гнучкість і поставу, чудово доповнюють силові тренування та біг і допомагають розвантажити спину після сидячої роботи. Програма адаптується під ваш рівень.",
        },
        {
          q: "Що потрібно для онлайн-заняття?",
          a: "Килимок, стабільний інтернет та 1.5-2 м вільного простору.",
        },
        {
          q: "Чи можна займатися при болях у спині?",
          a: "У більшості випадків так, але лише після короткої первинної оцінки стану. На старті тренер уточнює ваші симптоми, рівень болю, обмеження в рухах і попередній досвід занять, щоб підібрати безпечний формат навантаження. Програма будується м’яко: з акцентом на стабілізацію, дихання, мобільність і контроль техніки без різких або провокуючих рухів. У процесі заняття адаптуються під самопочуття, а навантаження підвищується поступово, щоб зменшити дискомфорт і повернути впевненість у русі.",
        },
        {
          q: "Скільки коштує заняття і чи є пробне?",
          a: "Актуальні ціни на всі формати зібрані в секції «Тарифи» на цій сторінці: відеозаняття в записі, програма «10 тренувань» та онлайн-заняття наживо. Почати можна з безкоштовної консультації, а формат наживо — спробувати разовим заняттям без абонемента.",
        },
        {
          q: "Чи можна скасувати або перенести заняття?",
          a: "Так, попередьте тренера заздалегідь через Telegram, і заняття буде перенесено на зручний час.",
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
      pricing: "Pricing",
      blog: "Blog",
      faq: "FAQ",
      contacts: "Contacts",
    },
    hero: {
      badge: "Certified Pilates Coach",
      title: "Build balance, strength, and mobility in a format that fits you",
      subtitle:
        "Train online, privately, or in small groups - in Ukrainian and English, for beginners and those returning to movement.",
      primaryCta: "Get a Personal Offer",
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
    pricing: {
      title: "Pricing",
      description: "Transparent prices with no hidden conditions. The first consultation is free: we will pick a format and build a training plan tailored to your goal, level and schedule.",
      note: "For comparison: a group pilates class in Europe costs €15–30, a private session €50–80.",
      cta: "Book now",
      groups: [
        {
          name: "Recorded video sessions",
          description: "45–50-minute recorded workouts on a private YouTube — train whenever it suits you.",
          items: [
            { name: "1 workout · 1-week access", price: "€20" },
            { name: "3 workouts · 2-week access", price: "€50" },
            { name: "6 workouts · 1-month access", price: "€120" },
            { name: "12 workouts · 2-month access", price: "€220" },
          ],
        },
        {
          name: "The “10 Workouts” Program",
          description: "A structured course of 10 recorded workouts — a step-by-step program with the coach's support.",
          items: [
            { name: "Standard · 2-month access + 1 consultation or session", price: "€200" },
            { name: "Group · 2-month access + Telegram channel", price: "€250" },
            { name: "VIP · 3-month access + program adjustments", price: "€400" },
          ],
        },
        {
          name: "Live online sessions",
          description: "Real-time sessions with the coach, 1 hour.",
          items: [
            { name: "Single session", price: "€25" },
            { name: "8-session pass · twice a week", price: "€180" },
          ],
        },
      ],
    },
    blog: {
      title: "Blog",
      description: "Practical pilates guidance: how to start safely, what to do about back pain, and how to stay consistent in a busy schedule.",
      posts: [
        {
          slug: "pilates-for-back-pain-how-to-start-safely",
          title: "Pilates for Back Pain: How to Start Safely",
          excerpt: "What to do if your back hurts daily: core principles, which exercises to avoid at the beginning, and how to choose gentle loads without flare-ups.",
          publishedDate: "2026-05-18T09:00:00+03:00",
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
          publishedDate: "2026-05-25T09:00:00+03:00",
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
          publishedDate: "2026-06-01T09:00:00+03:00",
          content: [
            "If you spend most of your day sitting, tension tends to build up in your neck, upper back, and lower back. The good news is that even 15 minutes of mindful movement can noticeably improve how you feel.",
            "A simple sequence can look like this: 3-4 minutes of breathing and thoracic mobility, 5-6 minutes of core and glute activation, then 4-5 minutes of gentle release for neck and lower back.",
            "Focus on quality: smooth transitions, no sudden moves, neutral alignment, and no pushing through sharp pain. In this format, precision matters more than speed.",
            "You can fit this into your day before work, between meetings, or in the evening. The key is regular practice, not waiting until discomfort becomes severe.",
            "Short, consistent sessions help reduce fatigue, improve posture, and bring back a sense of lightness even during high-workload weeks.",
          ],
        },
        {
          slug: "pilates-for-weight-loss-does-it-really-work",
          title: "Pilates for Weight Loss: Does It Really Work?",
          excerpt: "Can pilates help you lose weight and reshape your body: how many calories a session burns, which exercises work best, and what to add to your routine for real results.",
          publishedDate: "2026-07-13T09:00:00+03:00",
          content: [
            "Pilates is rarely associated with weight loss - and that's fair if you expect the same effect as intense cardio. But that doesn't mean it has no impact on your body: consistent practice changes muscle tone, posture, and overall shape, even when the number on the scale moves slowly.",
            "For comparison, a moderate-intensity pilates session burns roughly 150-250 calories per hour - less than running or interval training, but comparable to brisk walking. So it's better to think of pilates not as a way to 'burn fat,' but as a tool that reshapes body composition: less fat, more lean muscle.",
            "Certain exercises are especially effective for tone and energy output. The Hundred raises your heart rate and activates the core and breathing from the first minutes of class. Plank variations engage nearly the whole body at once, and the Roll-Up trains the deep core muscles responsible for a flatter stomach and better posture.",
            "If weight loss is the main goal, pilates works best paired with other activity: 2-3 pilates sessions a week plus 20-30 minutes of daily walking or light cardio. Nutrition still drives most of the calorie deficit - pilates creates the conditions for results, but it doesn't replace watching what you eat.",
            "A realistic timeline looks like this: the first 1-2 weeks bring more energy and a lighter feeling in the body; by 4-6 weeks, measurements shift and clothes start fitting differently; after 8-12 weeks of consistent practice, changes in shape, tone, and endurance become clearly visible.",
            "Two common myths are worth clearing up. First, that pilates 'burns fat in one specific area' - spot reduction doesn't exist; the body loses fat overall, based on total calorie balance. Second, that pilates fully replaces cardio - for a larger calorie deficit, some cardio or higher daily activity is still needed.",
            "The real advantage of pilates for weight goals is sustainability: it's a format you can keep up for years without burning out or overloading your joints. Long-term consistency, combined with nutrition and baseline activity, tends to deliver a better, more stable result than short bursts of intensity.",
          ],
        },
        {
          slug: "pilates-vs-yoga-whats-the-difference-and-which-to-choose",
          title: "Pilates vs Yoga: What's the Difference and Which to Choose",
          excerpt: "Comparing goals, exercises, and how each practice feels in specific situations - and when to choose one over the other, or combine both.",
          publishedDate: "2026-07-20T09:00:00+03:00",
          content: [
            "Pilates and yoga are often confused because both are gentle, mindful, and don't require heavy equipment. But their focus is different: pilates is centered on strength, control, and core stability, while yoga is built around flexibility, breathing, and mental balance.",
            "In pilates, movements are structured and repeatable, with a strong focus on technique - activating deep core muscles, controlling body position, and moving with precision. Typical exercises like the Hundred, plank, and Bridge target core strength, glutes, and spinal stabilizers.",
            "Yoga, on the other hand, is built around holding poses (asanas) such as downward dog or child's pose, along with stretching and breathing techniques (pranayama), with more emphasis on relaxation and flexibility than on core strength work.",
            "Let's compare by situation. Back pain from a desk job - pilates is the better fit, since it strengthens the muscles that stabilize the spine. Need to unwind after a stressful day and release tight muscles - yoga's breathing and slow holds work better here. Want better posture and a toned core - pilates again. Want more joint mobility and mental release - yoga.",
            "The pace also differs: pilates is usually more dynamic, with repetitions and breath counted to movement, while yoga tends to involve longer holds and slower transitions between poses.",
            "Both reduce stress, but through different mechanisms: pilates through focus on precision and control, yoga through relaxation and mindful breathing in static poses.",
            "In practice, the two complement each other well: pilates builds strength and stability, while yoga adds flexibility and recovery. Many clients combine both formats across the week - for example, two pilates sessions and one yoga session - for a more balanced effect on body and mind.",
          ],
        },
        {
          slug: "how-long-until-you-see-results-from-pilates",
          title: "How Long Until You See Results From Pilates",
          excerpt: "A realistic week-by-week timeline: what you can feel after your very first session, and what takes months of consistent practice.",
          publishedDate: "2026-07-27T09:00:00+03:00",
          content: [
            "One of the most common questions before starting is when results will show up. The honest answer: the first changes happen faster than you'd expect, but they aren't always visible from the outside right away.",
            "Sessions 1-2: your body is still learning. You'll feel lighter afterward, more connected to your breathing, and a slightly wider range of motion in the joints. There's no muscular result yet - this is your nervous system learning to control movement better.",
            "Weeks 2-4 (training 2-3 times a week): less morning stiffness, less tension in the lower back and neck by the end of the workday, and growing endurance - a session that felt hard at first starts to feel more manageable.",
            "Weeks 4-6: core strength becomes noticeably better - planks hold longer, balance exercises feel steadier. This is usually when clothes start fitting differently, even if the scale hasn't moved much.",
            "Months 2-3: visible tone and definition build up, posture straightens without conscious effort, and most of the discomfort from a sedentary lifestyle fades. This is the typical window trainers and the pilates community point to for the 'first visible result.'",
            "Month 3 and beyond: your body reaches a new baseline - more advanced exercises and variations become accessible, and the original program starts to feel like a warm-up. Progress continues, but it now requires added challenge to avoid plateauing.",
            "The biggest factor in how fast results appear isn't intensity - it's consistency. Two or three steady sessions a week over a few months deliver a better, longer-lasting effect than occasional intense workouts every couple of weeks.",
          ],
        },
        {
          slug: "pilates-and-posture-how-to-fix-rounded-shoulders-without-pain",
          title: "Pilates and Posture: How to Fix Rounded Shoulders Without Pain",
          excerpt: "Why poor posture builds up from a sedentary lifestyle, and which specific pilates exercises bring the shoulders and spine back to a comfortable position.",
          publishedDate: "2026-08-03T09:00:00+03:00",
          content: [
            "Rounded shoulders rarely happen overnight - they build up over years of a sedentary lifestyle, as the chest muscles shorten and the muscles of the mid-back weaken and stop holding the shoulders in a healthy position.",
            "Pilates addresses posture from two directions at once: stretching and mobilizing the thoracic spine, which is usually tight, and strengthening the muscles between the shoulder blades along with the deep core that supports a stable spine.",
            "Three exercises target this especially well. The Chest Opener / thoracic extension over a roller or cushion gently opens the chest and releases tightness. The Swan strengthens the back extensors and trains the body to hold a neutral spine. The Scapular Squeeze activates the mid-back muscles that tend to go dormant in people with rounded shoulders.",
            "It's not about forcing your shoulders back for a few seconds - that doesn't change the body's habits. Instead, repeating these exercises regularly gradually retrains muscle memory so that good alignment becomes natural instead of something you have to consciously hold.",
            "The first changes are usually felt as less tension between the shoulder blades and neck by the end of the workday - often within the first week of consistent practice. A visibly straighter posture tends to show up a bit later, after 3-4 weeks.",
            "A useful extra habit: short 2-3 minute thoracic mobility breaks right at your desk (a few torso rotations, shoulder blade squeezes while seated) maintain the effect between full sessions and keep the muscles from tightening back up.",
            "The best results come from combining these short daily breaks with 2-3 full sessions per week - giving the body both immediate relief and long-term muscular balance.",
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
          q: "Is pilates suitable for men?",
          a: "Yes, absolutely. Pilates was created by a man - Joseph Pilates - and the method was originally developed for men. Sessions build core strength, flexibility, and posture, complement strength training and running well, and help release back tension after desk work. The program is adapted to your level.",
        },
        {
          q: "What do I need for online classes?",
          a: "A mat, stable internet, and around 1.5-2 meters of free space.",
        },
        {
          q: "Can I train if I have back pain?",
          a: "In most cases, yes - but only after a short initial assessment. At the start, the coach clarifies your symptoms, pain level, movement limitations, and previous training experience to choose a safe training format. The program is built gently, with a focus on stabilization, breathing, mobility, and technique control without sharp or provocative movements. Sessions are adapted to how you feel, and the load increases gradually to reduce discomfort and restore confidence in movement.",
        },
        {
          q: "How much does a session cost, and is there a trial?",
          a: "Current prices for all formats are listed in the Pricing section on this page: recorded video workouts, the \"10 workouts\" program, and live online sessions. You can start with a free consultation, and try the live format with a single drop-in class - no subscription needed.",
        },
        {
          q: "Can I cancel or reschedule a session?",
          a: "Yes, just let the coach know in advance via Telegram and the session will be moved to a time that works for you.",
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
