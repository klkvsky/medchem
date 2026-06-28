import {SearchIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const siteSeoType = defineType({
  name: 'siteSeo',
  title: 'SEO',
  type: 'document',
  icon: SearchIcon,
  fields: [
    defineField({
      name: 'siteName',
      title: 'Название сайта',
      type: 'string',
      description:
        'Название сайта или бренда для SEO-шаблонов и превью. Обычно используется короткое официальное имя.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'titleTemplate',
      title: 'Шаблон заголовка',
      type: 'string',
      description:
        'Используйте %s там, где должен подставляться заголовок страницы. Например: %s | Med Chem.',
    }),
    defineField({
      name: 'defaultSeo',
      title: 'Метаданные по умолчанию',
      type: 'seo',
      description:
        'Базовые SEO-данные для страниц, у которых нет собственных настроек.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'homePageSeo',
      title: 'Метаданные главной страницы',
      type: 'seo',
      description:
        'SEO-данные только для главной страницы. Если поле заполнено, оно перекрывает значения по умолчанию.',
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Канонический URL',
      type: 'url',
      description:
        'Основной адрес сайта для поисковых систем. Указывайте полный URL с https://.',
      validation: (rule) => rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'robots',
      title: 'Индексация',
      type: 'string',
      description:
        'Разрешает или запрещает индексирование сайта поисковыми системами. Для публичного сайта обычно нужен Index.',
      initialValue: 'index',
      options: {
        list: [
          {title: 'Индексировать', value: 'index'},
          {title: 'Не индексировать', value: 'noindex'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
      subtitle: 'defaultSeo.title',
    },
  },
})
