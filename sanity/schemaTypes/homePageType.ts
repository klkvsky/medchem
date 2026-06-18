import {
  HomeIcon,
  InfoOutlineIcon,
  PackageIcon,
  ProjectsIcon,
  StackIcon,
  UsersIcon,
} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const heroSectionType = defineType({
  name: 'heroSection',
  title: 'Hero section',
  type: 'object',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'headlineLines',
      title: 'Headline lines',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.required().min(1).max(4),
    }),
    defineField({
      name: 'keywords',
      type: 'array',
      of: [defineArrayMember({type: 'heroKeyword'})],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Hero'}
    },
  },
})

export const aboutSectionType = defineType({
  name: 'aboutSection',
  title: 'About section',
  type: 'object',
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: 'statistic',
      type: 'statistic',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'audiences',
      type: 'array',
      of: [defineArrayMember({type: 'tag'})],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'statistic.label',
    },
  },
})

export const servicesSectionType = defineType({
  name: 'servicesSection',
  title: 'Services section',
  type: 'object',
  icon: StackIcon,
  fields: [
    defineField({
      name: 'services',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'serviceOffering'}],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Services'}
    },
  },
})

export const projectsSectionType = defineType({
  name: 'projectsSection',
  title: 'Projects section',
  type: 'object',
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: 'leftColumnTitle',
      type: 'string',
      initialValue: 'разработка молекул',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rightColumnTitle',
      type: 'string',
      initialValue: 'цифровые продукты',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'projects',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'project'}],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'moleculeStatistic',
      type: 'statistic',
    }),
    defineField({
      name: 'digitalStatistic',
      type: 'statistic',
    }),
    defineField({
      name: 'showMoreLabel',
      type: 'string',
      initialValue: 'Показать больше',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Projects'}
    },
  },
})

export const productSectionType = defineType({
  name: 'productSection',
  title: 'Product section',
  type: 'object',
  icon: PackageIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'cta',
      type: 'callToAction',
    }),
    defineField({
      name: 'audience',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [defineArrayMember({type: 'tag'})],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'summary',
      media: 'image',
    },
  },
})

export const teamSectionType = defineType({
  name: 'teamSection',
  title: 'Team section',
  type: 'object',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'members',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'teamMember'}],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'statistic',
      type: 'statistic',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'statistic.label',
    },
  },
})

export const partnersSectionType = defineType({
  name: 'partnersSection',
  title: 'Partners section',
  type: 'object',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'partners',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'partner'}],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
})

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Home',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hero',
      type: 'heroSection',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'about',
      type: 'aboutSection',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'services',
      type: 'servicesSection',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'projects',
      type: 'projectsSection',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'product',
      title: 'Xantir product',
      type: 'productSection',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'team',
      type: 'teamSection',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'partners',
      type: 'partnersSection',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
