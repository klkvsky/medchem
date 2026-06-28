import {ImageIcon, SearchIcon, TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const imageWithAltType = defineType({
  name: 'imageWithAlt',
  title: 'Изображение',
  type: 'image',
  icon: ImageIcon,
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Альтернативный текст',
      type: 'string',
      description:
        'Коротко опишите, что изображено на картинке. Этот текст нужен для доступности и поисковых систем.',
      validation: (rule) => rule.required(),
    }),
  ],
})

export const tagType = defineType({
  name: 'tag',
  title: 'Тег',
  type: 'object',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Текст тега',
      type: 'string',
      description:
        'Короткая подпись внутри тега. Лучше использовать 1-3 слова, чтобы тег не ломал верстку.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Форма тега',
      type: 'string',
      description:
        'Выберите визуальную форму тега: прямоугольник, пилюля или трапеция. Используйте разные формы для ритма в группе тегов.',
      initialValue: 'rectangle',
      options: {
        list: [
          {title: 'Прямоугольник', value: 'rectangle'},
          {title: 'Пилюля', value: 'pill'},
          {title: 'Трапеция', value: 'trapezoid'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      type: 'type',
    },
    prepare({title, type}) {
      return {
        title,
        subtitle: type,
      }
    },
  },
})

export const seoType = defineType({
  name: 'seo',
  title: 'SEO-метаданные',
  type: 'object',
  icon: SearchIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'SEO-заголовок',
      type: 'string',
      description:
        'Заголовок для поисковой выдачи и вкладки браузера. Желательно уложиться в 60-70 символов.',
      validation: (rule) =>
        rule.max(70).warning('Лучше держать SEO-заголовок короче 70 символов.'),
    }),
    defineField({
      name: 'description',
      title: 'SEO-описание',
      type: 'text',
      rows: 3,
      description:
        'Краткое описание страницы для поисковых систем и социальных превью. Оптимально 120-160 символов.',
      validation: (rule) =>
        rule.max(160).warning('Лучше держать SEO-описание короче 160 символов.'),
    }),
    defineField({
      name: 'image',
      title: 'Изображение для соцсетей',
      type: 'imageWithAlt',
      description:
        'Картинка для Open Graph-превью. Используйте понятный визуал без мелкого текста.',
    }),
  ],
})
