import {defineQuery} from 'next-sanity'

const imageFields = /* groq */ `
  alt,
  "url": asset->url,
  "width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height
`

const tagFields = /* groq */ `
  _key,
  name,
  type
`

export const HOME_PAGE_QUERY = defineQuery(/* groq */ `
  *[_type == "homePage" && _id == "homePage"][0] {
    title,
    hero {
      title,
      details[] {
        _key,
        icon,
        name
      }
    },
    about {
      title,
      description,
      tags[] {
        ${tagFields}
      }
    },
    services {
      serviceSlides[] {
        _key,
        backgroundImage {
          ${imageFields}
        },
        bulletPointText,
        title,
        services[] {
          _key,
          title,
          tags[] {
            ${tagFields}
          }
        }
      }
    },
    portfolio {
      sections[] {
        _key,
        title,
        projects[] {
          _key,
          image {
            ${imageFields}
          },
          title,
          subtitle,
          description,
          tags[] {
            ${tagFields}
          },
          innerImage {
            ${imageFields}
          }
        },
        endImage {
          ${imageFields}
        }
      }
    },
    xantir {
      title,
      description,
      tags[] {
        ${tagFields}
      },
      description2,
      buttonText,
      buttonLink,
      image {
        ${imageFields}
      }
    },
    team {
      title,
      bottomTags[] {
        ${tagFields}
      },
      teamMembers[] {
        _key,
        image {
          ${imageFields}
        },
        isBadge,
        title,
        description,
        tags[] {
          ${tagFields}
        }
      }
    },
    partners {
      title,
      partners[] {
        _key,
        image {
          ${imageFields}
        },
        name
      }
    },
    footer {
      footerText,
      privacyLink
    }
  }
`)

export type SanityImage = {
  alt?: string | null
  url?: string | null
  width?: number | null
  height?: number | null
}

export type HomeTag = {
  _key?: string
  name?: string | null
  type?: 'rectangle' | 'pill' | 'trapezoid' | null
}

export type HomePageData = {
  title?: string | null
  hero?: {
    title?: string | null
    details?: {
      _key?: string
      icon?: string | null
      name?: string | null
    }[] | null
  } | null
  about?: {
    title?: string | null
    description?: string | null
    tags?: HomeTag[] | null
  } | null
  services?: {
    serviceSlides?: {
      _key?: string
      backgroundImage?: SanityImage | null
      bulletPointText?: string | null
      title?: string | null
      services?: {
        _key?: string
        title?: string | null
        tags?: HomeTag[] | null
      }[] | null
    }[] | null
  } | null
  portfolio?: {
    sections?: {
      _key?: string
      title?: string | null
      projects?: {
        _key?: string
        image?: SanityImage | null
        title?: string | null
        subtitle?: string | null
        description?: string | null
        tags?: HomeTag[] | null
        innerImage?: SanityImage | null
      }[] | null
      endImage?: SanityImage | null
    }[] | null
  } | null
  xantir?: {
    title?: string | null
    description?: string | null
    tags?: HomeTag[] | null
    description2?: string | null
    buttonText?: string | null
    buttonLink?: string | null
    image?: SanityImage | null
  } | null
  team?: {
    title?: string | null
    bottomTags?: HomeTag[] | null
    teamMembers?: {
      _key?: string
      image?: SanityImage | null
      isBadge?: boolean | null
      title?: string | null
      description?: string | null
      tags?: HomeTag[] | null
    }[] | null
  } | null
  partners?: {
    title?: string | null
    partners?: {
      _key?: string
      image?: SanityImage | null
      name?: string | null
    }[] | null
  } | null
  footer?: {
    footerText?: string | null
    privacyLink?: string | null
  } | null
}
