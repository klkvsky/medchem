import { type SchemaTypeDefinition } from 'sanity'

import {
  aboutSectionType,
  heroSectionType,
  homePageType,
  partnersSectionType,
  productSectionType,
  projectsSectionType,
  servicesSectionType,
  teamSectionType,
} from './homePageType'
import {
  callToActionType,
  heroKeywordType,
  heroKeywordRowType,
  imageWithAltType,
  seoType,
  serviceStepType,
  statisticType,
  tagType,
} from './objects'
import {partnerType} from './partnerType'
import {projectType} from './projectType'
import {serviceOfferingType} from './serviceOfferingType'
import {siteSeoType} from './siteSeoType'
import {footerSettingsType, siteSettingsType} from './siteSettingsType'
import {teamMemberType} from './teamMemberType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePageType,
    serviceOfferingType,
    projectType,
    teamMemberType,
    partnerType,
    siteSeoType,
    siteSettingsType,
    heroSectionType,
    aboutSectionType,
    servicesSectionType,
    projectsSectionType,
    productSectionType,
    teamSectionType,
    partnersSectionType,
    imageWithAltType,
    tagType,
    callToActionType,
    seoType,
    heroKeywordType,
    heroKeywordRowType,
    statisticType,
    serviceStepType,
    footerSettingsType,
  ],
}
