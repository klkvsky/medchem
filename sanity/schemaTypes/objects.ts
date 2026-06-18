import {
  ImageIcon,
  LinkIcon,
  SearchIcon,
  TagIcon,
  ThLargeIcon,
} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const imageWithAltType = defineType({
  name: 'imageWithAlt',
  title: 'Image',
  type: 'image',
  icon: ImageIcon,
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})

export const tagType = defineType({
  name: 'tag',
  title: 'Tag',
  type: 'object',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shape',
      type: 'string',
      initialValue: 'rectangle',
      options: {
        list: [
          {title: 'Rectangle', value: 'rectangle'},
          {title: 'Pill', value: 'pill'},
          {title: 'Trapezoid', value: 'trapezoid'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'shape',
    },
  },
})

export const callToActionType = defineType({
  name: 'callToAction',
  title: 'Call to action',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'url',
      validation: (rule) =>
        rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'url',
    },
  },
})

export const seoType = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  icon: SearchIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Meta title',
      type: 'string',
      validation: (rule) =>
        rule.max(70).warning('Keep titles under 70 characters where possible.'),
    }),
    defineField({
      name: 'description',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      validation: (rule) =>
        rule.max(160).warning('Keep descriptions under 160 characters where possible.'),
    }),
    defineField({
      name: 'image',
      title: 'Social image',
      type: 'imageWithAlt',
    }),
  ],
})

export const heroKeywordType = defineType({
  name: 'heroKeyword',
  title: 'Hero keyword',
  type: 'object',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      type: 'string',
      options: {
        list: [
          {title: 'Rectangle', value: 'rectangle'},
          {title: 'Coin', value: 'coin'},
          {title: 'Grid', value: 'grid'},
          {title: 'Pill', value: 'pill'},
          {title: 'Circles', value: 'circles'},
          {title: 'Hole', value: 'hole'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'icon',
    },
  },
})

export const statisticType = defineType({
  name: 'statistic',
  title: 'Statistic',
  type: 'object',
  icon: ThLargeIcon,
  fields: [
    defineField({
      name: 'value',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'supportingLabel',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'value',
      subtitle: 'label',
    },
  },
})

export const serviceStepType = defineType({
  name: 'serviceStep',
  title: 'Service step',
  type: 'object',
  icon: ThLargeIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [defineArrayMember({type: 'tag'})],
      validation: (rule) => rule.max(4).warning('The service card is designed for short tag groups.'),
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
          ? tags.map((tag) => tag?.label).filter(Boolean).join(', ')
          : undefined,
      }
    },
  },
})
