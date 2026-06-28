import {CogIcon, RocketIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const footerSettingsType = defineType({
  name: 'footerSettings',
  title: 'Footer settings',
  type: 'object',
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'companyName',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'year',
      type: 'number',
      validation: (rule) => rule.required().integer().min(2000),
    }),
    defineField({
      name: 'taxId',
      title: 'Tax ID',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'legalLink',
      type: 'callToAction',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'creditLink',
      type: 'callToAction',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'companyName',
      subtitle: 'taxId',
    },
  },
})

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'brandName',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'footer',
      type: 'footerSettings',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'brandName',
      subtitle: 'footer.companyName',
    },
  },
})
