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
    defineField({
      name: 'variant',
      title: 'Appearance',
      type: 'string',
      initialValue: 'default',
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Outline', value: 'outline'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      shape: 'shape',
      variant: 'variant',
    },
    prepare({title, shape, variant}) {
      return {
        title,
        subtitle: [shape, variant].filter(Boolean).join(' / '),
      }
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
      name: 'linkType',
      type: 'string',
      initialValue: 'internal',
      options: {
        list: [
          {title: 'Internal path', value: 'internal'},
          {title: 'External URL', value: 'external'},
          {title: 'No link', value: 'none'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'internalPath',
      type: 'string',
      description: 'Use a Next.js path or page anchor, for example / or #contact.',
      hidden: ({parent}) => parent?.linkType !== 'internal',
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as {linkType?: string} | undefined

          if (parent?.linkType !== 'internal') {
            return true
          }

          if (!value) {
            return 'Internal path is required.'
          }

          return value.startsWith('/') || value.startsWith('#')
            ? true
            : 'Internal paths must start with / or #.'
        }),
    }),
    defineField({
      name: 'externalUrl',
      type: 'url',
      hidden: ({parent}) => parent?.linkType !== 'external',
      validation: (rule) =>
        rule.uri({scheme: ['http', 'https', 'mailto', 'tel']}).custom((value, context) => {
          const parent = context.parent as {linkType?: string} | undefined

          if (parent?.linkType !== 'external') {
            return true
          }

          return value ? true : 'External URL is required.'
        }),
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL (deprecated)',
      deprecated: {
        reason: 'Use linkType with internalPath or externalUrl instead.',
      },
      readOnly: true,
      hidden: ({value}) => value === undefined,
      initialValue: undefined,
      validation: (rule) =>
        rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      linkType: 'linkType',
      internalPath: 'internalPath',
      externalUrl: 'externalUrl',
      url: 'url',
    },
    prepare({title, linkType, internalPath, externalUrl, url}) {
      return {
        title,
        subtitle: internalPath || externalUrl || url || linkType,
      }
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

export const heroKeywordRowType = defineType({
  name: 'heroKeywordRow',
  title: 'Hero keyword row',
  type: 'object',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'keywords',
      type: 'array',
      of: [defineArrayMember({type: 'heroKeyword'})],
      validation: (rule) => rule.required().min(1).max(3),
    }),
  ],
  preview: {
    select: {
      keywords: 'keywords',
    },
    prepare({keywords}) {
      return {
        title: Array.isArray(keywords)
          ? keywords.map((keyword) => keyword?.label).filter(Boolean).join(', ')
          : 'Hero keyword row',
      }
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
      name: 'numberAsset',
      title: 'Number graphic',
      type: 'string',
      description: 'Optional matching number artwork used by the home page statistic treatments.',
      options: {
        list: [
          {title: '10', value: 'ten'},
          {title: '15', value: 'fifteen'},
          {title: '20', value: 'twenty'},
          {title: '30', value: 'thirty'},
        ],
      },
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
    defineField({
      name: 'labelTags',
      title: 'Label tags',
      type: 'array',
      description: 'Optional styled labels for statistic callouts that render as tags.',
      of: [defineArrayMember({type: 'tag'})],
      validation: (rule) => rule.max(3),
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
      validation: (rule) =>
        rule.required().min(1).max(4).warning('The service card is designed for short tag groups.'),
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
