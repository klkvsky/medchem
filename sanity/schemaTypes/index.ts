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
import {imageWithAltType, seoType, tagType} from './objects'
import {siteSeoType} from './siteSeoType'
import {siteSettingsType} from './siteSettingsType'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    homePageType,
    siteSeoType,
    siteSettingsType,
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
    seoType,
  ],
}
