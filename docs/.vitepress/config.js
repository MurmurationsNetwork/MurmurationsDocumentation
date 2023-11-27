import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Murmurations Docs",
  description: "Documentation for the Murmurations Protocol",
  lastUpdated: true,
  themeConfig: {
    
    editLink: {
      pattern: 'https://github.com/MurmurationsNetwork/MurmurationsDocumentation/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    logo: '/murmurations-logo.png',

    nav: [
      { text: 'FAQs', link: '/faqs/general' },
      { text: 'Developers', link: '/developers/environments' },
      { text: 'Guides', link: '/guides/create-a-profile' }
    ],

    sidebar: [
      {
        text: 'About',
        items: [
          {link: '/about/introduction', text: 'Introduction'},
          {link: '/about/use-cases', text: 'Use Cases'},
          {link: '/about/ontology-composability', text: 'Composable Ontologies'},
          {link: '/about/common-terms', text: 'Common Terms'},
          {link: '/about/architecture', text: 'Architecture'},
          {link: '/about/roadmap', text: 'Roadmap'},
          {link: '/about/contributing', text: 'Contributing'},
          {link: '/about/getting-support', text: 'Getting Support'}
        ],
        collapsed: false
      },
      {
        text: 'Guides',
        items: [
          {link: '/guides/create-a-profile', text: 'Create a Profile'},
          {link: '/guides/view-the-data', text: 'View the Data'},
          {link: '/guides/map', text: 'Create a Map'},
          {link: '/guides/import-networks', text: 'Import data'},
          {link: '/guides/create-a-schema', text: 'Create a Schema'}
        ],
        collapsed: false
      },
      {
        text: 'Developers',
        items: [
          {link: '/developers/environments', text: 'Environments'},
          {link: '/developers/index-api', text: 'Index API'},
          {link: '/developers/library-api', text: 'Library API'},
          {link: '/developers/wp-aggregator', text: 'WordPress Aggregator Plugin'},
          {link: '/developers/wp-node', text: 'WordPress Node Plugin 🚀'}
        ],
        collapsed: false
      },
      {
        text: 'FAQs',
        items: [
          {link: '/faqs/general', text: 'General FAQs'},
          {link: '/faqs/developer', text: 'Developer FAQs'},
          {link: '/faqs/schema', text: 'Schema FAQs'}
        ],
        collapsed: false
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MurmurationsNetwork' }
    ]
  }
})
