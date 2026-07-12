import {
  HomeIcon,
  InfoOutlineIcon,
  PackageIcon,
  ProjectsIcon,
  StackIcon,
  UsersIcon,
} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

const iconOptions = [
  {title: 'Круги (circles)', value: 'circles'},
  {title: 'Монета (coin)', value: 'coin'},
  {title: 'Сетка (grid)', value: 'grid'},
  {title: 'Отверстие (hole)', value: 'hole'},
  {title: 'Пилюля (pill)', value: 'pill'},
  {title: 'Ромб (rectangle)', value: 'rectangle'},
]

export const heroDetailType = defineType({
  name: 'heroDetail',
  title: 'Деталь hero-блока',
  type: 'object',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'icon',
      title: 'Иконка',
      type: 'string',
      description:
        'Выберите одну из иконок, которые есть в components/home/icons.tsx. Иконка помогает быстро считать направление услуги.',
      options: {
        list: iconOptions,
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Название',
      type: 'string',
      description:
        'Короткая подпись рядом с иконкой. Лучше оставить одну лаконичную фразу без точки в конце.',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'icon',
    },
  },
})

export const heroSectionType = defineType({
  name: 'heroSection',
  title: 'Первый экран (Hero)',
  type: 'object',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      description:
        'Главная фраза первого экрана. Пишите коротко и емко: это первое сообщение, которое увидит пользователь.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'details',
      title: 'Детали',
      type: 'array',
      description:
        'Список направлений под заголовком. Каждая деталь состоит из иконки и короткого названия.',
      of: [defineArrayMember({type: 'heroDetail'})],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      details: 'details',
    },
    prepare({title, details}) {
      return {
        title: title || 'Hero',
        subtitle: Array.isArray(details) ? `${details.length} деталей` : undefined,
      }
    },
  },
})

export const aboutSectionType = defineType({
  name: 'aboutSection',
  title: 'О компании',
  type: 'object',
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      description:
        'Коротко сформулируйте, кто вы и какую экспертизу показываете в этом блоке.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      rows: 4,
      description:
        'Раскройте заголовок в 1-2 предложениях. Хорошо работают конкретные направления, отрасли и результаты.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Теги',
      type: 'array',
      description:
        'До 6 коротких тегов про аудитории или рынки. Не перегружайте блок длинными формулировками.',
      of: [defineArrayMember({type: 'tag'})],
      validation: (rule) => rule.required().min(1).max(6),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})

export const serviceItemType = defineType({
  name: 'serviceItem',
  title: 'Услуга',
  type: 'object',
  icon: StackIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Название услуги',
      type: 'string',
      description:
        'Название отдельного пункта внутри слайда. Формулируйте как действие или понятный этап работы.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Теги услуги',
      type: 'array',
      description:
        'Короткие технические или продуктовые маркеры для этой услуги. Они помогают быстро понять специализацию.',
      of: [defineArrayMember({type: 'tag'})],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      tags: 'tags',
    },
    prepare({title, tags}) {
      return {
        title,
        subtitle: Array.isArray(tags)
          ? tags.map((tag) => tag?.name).filter(Boolean).join(', ')
          : undefined,
      }
    },
  },
})

export const serviceSlideType = defineType({
  name: 'serviceSlide',
  title: 'Слайд услуг',
  type: 'object',
  icon: StackIcon,
  fieldsets: [
    {
      name: 'responsiveBackgroundImages',
      title: 'Фоновые изображения по устройствам',
      options: {columns: 1},
    },
  ],
  fields: [
    defineField({
      name: 'mobileBackgroundImage',
      title: 'Телефон',
      type: 'imageWithAlt',
      fieldset: 'responsiveBackgroundImages',
      description:
        'Вертикальное или плотнее кадрированное фоновое изображение для телефонов.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tabletBackgroundImage',
      title: 'Планшет',
      type: 'imageWithAlt',
      fieldset: 'responsiveBackgroundImages',
      description:
        'Фоновое изображение для планшетов и средних экранов.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desktopBackgroundImage',
      title: 'Desktop',
      type: 'imageWithAlt',
      fieldset: 'responsiveBackgroundImages',
      description:
        'Широкое фоновое изображение для desktop-версии блока услуг.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bulletPointText',
      title: 'Маркер слайда',
      type: 'string',
      description:
        'Один символ для круглого маркера слайда. Например: A, B, 1 или другая короткая метка.',
      validation: (rule) => rule.required().min(1).max(1),
    }),
    defineField({
      name: 'title',
      title: 'Заголовок слайда',
      type: 'string',
      description:
        'Название группы услуг. Лучше использовать короткую фразу, которую удобно разбить на строки в интерфейсе.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'services',
      title: 'Список услуг',
      type: 'array',
      description:
        'До 5 услуг внутри одного слайда. Если пунктов больше, лучше объединить близкие этапы.',
      of: [defineArrayMember({type: 'serviceItem'})],
      validation: (rule) => rule.required().min(1).max(5),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'bulletPointText',
      media: 'desktopBackgroundImage',
    },
  },
})

export const servicesSectionType = defineType({
  name: 'servicesSection',
  title: 'Услуги',
  type: 'object',
  icon: StackIcon,
  fields: [
    defineField({
      name: 'serviceSlides',
      title: 'Слайды услуг',
      type: 'array',
      description:
        'Добавьте слайды с направлениями услуг. Каждый слайд содержит фон, маркер, заголовок и до 5 услуг.',
      of: [defineArrayMember({type: 'serviceSlide'})],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Услуги'}
    },
  },
})

export const portfolioProjectType = defineType({
  name: 'portfolioProject',
  title: 'Проект портфолио',
  type: 'object',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Изображение',
      type: 'imageWithAlt',
      description:
        'Основная картинка проекта в списке. Используйте изображение, по которому проект легко узнается.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Название',
      type: 'string',
      description: 'Короткое название проекта. Обычно это бренд, молекула или продукт.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Подзаголовок',
      type: 'string',
      description:
        'Дополнительная строка под названием: стадия, категория, направление или краткий статус.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      rows: 6,
      description:
        'Кратко объясните, что сделано в проекте и почему он важен. Пустые строки сохраняются и отображаются в попапе.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Теги',
      type: 'array',
      description:
        'Теги проекта: партнеры, технологии, терапевтическая область или статус. Держите подписи короткими.',
      of: [defineArrayMember({type: 'tag'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'innerImage',
      title: 'Внутреннее изображение',
      type: 'imageWithAlt',
      description:
        'Дополнительная картинка для подробного просмотра проекта: схема, скриншот, молекула или иллюстрация результата.',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
  },
})

export const portfolioSectionItemType = defineType({
  name: 'portfolioSectionItem',
  title: 'Раздел портфолио',
  type: 'object',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок раздела',
      type: 'string',
      description:
        'Название колонки или группы проектов. По схеме на странице должно быть ровно два раздела.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'projects',
      title: 'Проекты',
      type: 'array',
      description:
        'Проекты внутри этого раздела портфолио. Добавляйте только те кейсы, которые готовы показывать на сайте.',
      of: [defineArrayMember({type: 'portfolioProject'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'endImage',
      title: 'Финальное изображение',
      type: 'imageWithAlt',
      description:
        'Изображение в конце раздела. Его можно использовать как визуальный акцент или итоговый элемент ленты.',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      projects: 'projects',
      media: 'endImage',
    },
    prepare({title, projects, media}) {
      return {
        title,
        subtitle: Array.isArray(projects) ? `${projects.length} проектов` : undefined,
        media,
      }
    },
  },
})

export const portfolioSectionType = defineType({
  name: 'portfolioSection',
  title: 'Портфолио',
  type: 'object',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'sections',
      title: 'Разделы',
      type: 'array',
      description:
        'Ровно два раздела портфолио. Например: разработка молекул и цифровые продукты.',
      of: [defineArrayMember({type: 'portfolioSectionItem'})],
      validation: (rule) => rule.required().min(2).max(2),
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Портфолио'}
    },
  },
})

export const xantirSectionType = defineType({
  name: 'xantirSection',
  title: 'Xantir',
  type: 'object',
  icon: PackageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      description:
        'Название продукта или блока. Обычно здесь достаточно оставить "Xantir".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      rows: 3,
      description:
        'Первое описание продукта: что это за платформа и какую задачу она решает.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Теги',
      type: 'array',
      description:
        'Короткие теги аудиторий или отраслей, для которых предназначен продукт.',
      of: [defineArrayMember({type: 'tag'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'description2',
      title: 'Описание 2',
      type: 'text',
      rows: 3,
      description:
        'Второе описание: кому особенно полезен продукт и в каком сценарии он применяется.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Текст кнопки',
      type: 'string',
      description:
        'Текст CTA-кнопки. Используйте глагол действия: "Запросить доступ", "Получить демо", "Связаться".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'buttonLink',
      title: 'Ссылка кнопки',
      type: 'url',
      description:
        'Адрес для кнопки. Можно использовать внешнюю ссылку, mailto: или tel:.',
      validation: (rule) =>
        rule.required().uri({scheme: ['http', 'https', 'mailto', 'tel']}),
    }),
    defineField({
      name: 'image',
      title: 'Изображение',
      type: 'imageWithAlt',
      description:
        'Визуал продукта. Лучше использовать изображение, которое показывает интерфейс, схему или состояние продукта.',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
})

export const teamMemberCardType = defineType({
  name: 'teamMemberCard',
  title: 'Участник команды',
  type: 'object',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Фото',
      type: 'imageWithAlt',
      description:
        'Фото или иллюстрация участника команды. Для единообразия используйте изображения похожего кадрирования.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isBadge',
      title: 'Показывать бейдж',
      type: 'boolean',
      description:
        'Включите, если на карточке нужен дополнительный бейдж или отметка. Если бейдж не нужен, оставьте выключенным.',
      initialValue: false,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Имя или заголовок',
      type: 'string',
      description:
        'Имя участника или название карточки. Пишите так, как это должно отображаться на сайте.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      rows: 4,
      description:
        'Краткое описание опыта, роли или фактов о человеке. Лучше использовать несколько коротких строк.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Теги',
      type: 'array',
      description:
        'Роли или специализации участника. Теги должны быть короткими, чтобы карточки оставались аккуратными.',
      of: [defineArrayMember({type: 'tag'})],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
})

export const teamSectionType = defineType({
  name: 'teamSection',
  title: 'Команда',
  type: 'object',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      description:
        'Заголовок блока команды. Он должен объяснять, какую экспертизу представляет команда.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bottomTags',
      title: 'Нижние теги',
      type: 'array',
      description:
        'Теги в нижней части блока. Используйте их для коротких числовых или смысловых акцентов.',
      of: [defineArrayMember({type: 'tag'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'teamMembers',
      title: 'Участники команды',
      type: 'array',
      description:
        'Карточки участников команды. Добавляйте ключевых людей и роли, которые важно показать пользователю.',
      of: [defineArrayMember({type: 'teamMemberCard'})],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      members: 'teamMembers',
    },
    prepare({title, members}) {
      return {
        title,
        subtitle: Array.isArray(members) ? `${members.length} участников` : undefined,
      }
    },
  },
})

export const partnerItemType = defineType({
  name: 'partnerItem',
  title: 'Партнер',
  type: 'object',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Логотип',
      type: 'imageWithAlt',
      description:
        'Логотип или знак партнера. Загружайте контрастные версии, которые хорошо читаются в бегущей строке.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Название',
      type: 'string',
      description:
        'Название партнера. Если название длинное, используйте официальное короткое написание.',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})

export const partnersSectionType = defineType({
  name: 'partnersSection',
  title: 'Партнеры',
  type: 'object',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      description:
        'Заголовок блока партнеров. Он должен объяснять доверие или масштаб сотрудничества.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'partners',
      title: 'Партнеры',
      type: 'array',
      description:
        'Список партнеров для отображения на сайте. Каждый партнер состоит из логотипа и названия.',
      of: [defineArrayMember({type: 'partnerItem'})],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      partners: 'partners',
    },
    prepare({title, partners}) {
      return {
        title,
        subtitle: Array.isArray(partners) ? `${partners.length} партнеров` : undefined,
      }
    },
  },
})

export const footerSectionType = defineType({
  name: 'footerSection',
  title: 'Футер',
  type: 'object',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'footerText',
      title: 'Текст футера',
      type: 'text',
      rows: 3,
      description:
        'Юридический или контактный текст в футере. Обычно здесь указывают компанию, год и реквизиты.',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'footerText',
    },
  },
})

export const homePageType = defineType({
  name: 'homePage',
  title: 'Главная страница',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Название документа',
      type: 'string',
      description:
        'Внутреннее название страницы в Sanity Studio. На сайте обычно не показывается.',
      initialValue: 'Главная страница',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Первый экран (Hero)',
      type: 'heroSection',
      description:
        'Первый экран главной страницы: заголовок и детали с иконками.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'about',
      title: 'О компании',
      type: 'aboutSection',
      description:
        'Блок с кратким описанием компании, экспертизы и целевых направлений.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'services',
      title: 'Услуги',
      type: 'servicesSection',
      description:
        'Слайды услуг с фоном, маркером, заголовком и списком сервисов.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'portfolio',
      title: 'Портфолио',
      type: 'portfolioSection',
      description:
        'Два раздела портфолио с проектами и завершающими изображениями.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'xantir',
      title: 'Xantir',
      type: 'xantirSection',
      description:
        'Блок продукта Xantir: описания, теги, кнопка и изображение.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'team',
      title: 'Команда',
      type: 'teamSection',
      description:
        'Блок команды с заголовком, нижними тегами и карточками участников.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'partners',
      title: 'Партнеры',
      type: 'partnersSection',
      description:
        'Блок партнеров с заголовком и списком логотипов.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'footer',
      title: 'Футер',
      type: 'footerSection',
      description:
        'Контент нижней части страницы: текст футера и подпись ссылки на политику.',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
