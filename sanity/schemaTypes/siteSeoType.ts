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
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'titleTemplate',
      type: 'string',
      description: 'Use %s where the page title should appear, for example: %s | Med Chem.',
    }),
    defineField({
      name: 'defaultSeo',
      title: 'Default metadata',
      type: 'seo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'homePageSeo',
      title: 'Home page metadata',
      type: 'seo',
      description: 'Overrides the default metadata for the home page.',
    }),
    defineField({
      name: 'canonicalUrl',
      type: 'url',
      validation: (rule) => rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'robots',
      type: 'string',
      initialValue: 'index',
      options: {
        list: [
          {title: 'Index', value: 'index'},
          {title: 'No index', value: 'noindex'},
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
