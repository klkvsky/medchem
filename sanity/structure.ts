import {HomeIcon} from '@sanity/icons'
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
    ])
