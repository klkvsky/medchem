import {CogIcon, HomeIcon, ProjectsIcon, SearchIcon, StackIcon, UsersIcon} from '@sanity/icons'
import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website')
    .items([
      S.listItem()
        .title('Home page')
        .icon(HomeIcon)
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('SEO')
        .icon(SearchIcon)
        .child(S.document().schemaType('siteSeo').documentId('siteSeo')),
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('serviceOffering').title('Services').icon(StackIcon),
      S.documentTypeListItem('project').title('Projects').icon(ProjectsIcon),
      S.documentTypeListItem('teamMember').title('Team').icon(UsersIcon),
      S.documentTypeListItem('partner').title('Partners').icon(UsersIcon),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            'homePage',
            'siteSeo',
            'siteSettings',
            'serviceOffering',
            'project',
            'teamMember',
            'partner',
          ].includes(item.getId()!),
      ),
    ])
