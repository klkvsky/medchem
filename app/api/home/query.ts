import "server-only";

import { defineQuery } from "next-sanity";

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
        mobileBackgroundImage {
          ${imageFields}
        },
        tabletBackgroundImage {
          ${imageFields}
        },
        desktopBackgroundImage {
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
      footerText
    }
  }
`);
