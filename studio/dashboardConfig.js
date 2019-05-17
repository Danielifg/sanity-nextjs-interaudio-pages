export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cddfe6b6954c1bf953cd983',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-interaudio-pages-studio',
                  apiId: '0f54e1a0-a292-4684-b372-8cd8ae3d040e'
                },
                {
                  buildHookId: '5cddfe6b168f30fb4dc2ef37',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-interaudio-pages',
                  apiId: '80a6ac89-e64b-4c08-8d42-f599c2b325a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Danielifg/sanity-nextjs-interaudio-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-interaudio-pages.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
