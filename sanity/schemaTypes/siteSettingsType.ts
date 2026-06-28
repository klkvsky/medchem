import {CogIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Настройки сайта',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'brandName',
      title: 'Название бренда',
      type: 'string',
      description:
        'Короткое название бренда для служебных мест сайта и Sanity Studio. Обычно это MedChem.',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'brandName',
    },
  },
})
