import {StackIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const serviceOfferingType = defineType({
  name: 'serviceOffering',
  title: 'Service offering',
  type: 'document',
  icon: StackIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'code',
      title: 'Short code',
      type: 'string',
      description: 'A compact label such as A or B used by the service slide.',
      validation: (rule) => rule.max(3),
    }),
    defineField({
      name: 'summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'steps',
      type: 'array',
      of: [defineArrayMember({type: 'serviceStep'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'order',
      type: 'number',
      initialValue: 0,
      validation: (rule) => rule.integer().min(0),
    }),
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'displayOrderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'code',
    },
  },
})
