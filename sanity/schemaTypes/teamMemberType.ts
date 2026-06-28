import {UserIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team member',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'profileType',
      type: 'string',
      initialValue: 'person',
      options: {
        list: [
          {title: 'Person', value: 'person'},
          {title: 'Mascot', value: 'mascot'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'badge',
      type: 'string',
      description: 'Optional short badge shown over the portrait.',
    }),
    defineField({
      name: 'portrait',
      type: 'imageWithAlt',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'descriptionLines',
      title: 'Description lines',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.required().min(1).max(6),
    }),
    defineField({
      name: 'roles',
      type: 'array',
      of: [defineArrayMember({type: 'tag'})],
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
      title: 'name',
      subtitle: 'roles.0.label',
      media: 'portrait',
    },
  },
})
