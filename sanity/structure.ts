import {CogIcon, HomeIcon, SearchIcon} from '@sanity/icons'
import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Сайт')
    .items([
      S.listItem()
        .title('Главная страница')
        .icon(HomeIcon)
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('SEO')
        .icon(SearchIcon)
        .child(S.document().schemaType('siteSeo').documentId('siteSeo')),
      S.listItem()
        .title('Настройки')
        .icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['homePage', 'siteSeo', 'siteSettings'].includes(item.getId()!),
      ),
    ])
