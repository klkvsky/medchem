import {type SchemaTypeDefinition} from 'sanity'

import {
  aboutSectionType,
  footerSectionType,
  heroDetailType,
  heroSectionType,
  homePageType,
  partnerItemType,
  partnersSectionType,
  portfolioProjectType,
  portfolioSectionItemType,
  portfolioSectionType,
  serviceItemType,
  serviceSlideType,
  servicesSectionType,
  teamMemberCardType,
  teamSectionType,
  xantirSectionType,
} from './homePageType'
import {imageWithAltType, tagType} from './objects'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    homePageType,
    heroSectionType,
    heroDetailType,
    aboutSectionType,
    servicesSectionType,
    serviceSlideType,
    serviceItemType,
    portfolioSectionType,
    portfolioSectionItemType,
    portfolioProjectType,
    xantirSectionType,
    teamSectionType,
    teamMemberCardType,
    partnersSectionType,
    partnerItemType,
    footerSectionType,
    imageWithAltType,
    tagType,
  ],
}
