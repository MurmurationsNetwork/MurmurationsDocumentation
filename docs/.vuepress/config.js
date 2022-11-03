module.exports = {
  title: 'Murmurations',
  description: 'Documentation for the Murmurations Protocol',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/murmurations-logo.png',
    nav: [
      { text: 'FAQs', link: '/faqs/general' },
      { text: 'Developers', link: '/developers/environments' },
      { text: 'Guides', link: '/guides/create-a-profile' }
    ],
    sidebar: [
      {
        title: 'About',
        path: '/about/introduction',
        children: [
          ['/about/introduction', 'Introduction'],
          ['/about/common-terms', 'Common Terms'],
          ['/about/architecture', 'Architecture'],
          ['/about/roadmap', 'Roadmap'],
          ['/about/contributing', 'Contributing'],
          ['/about/getting-support', 'Getting Support']
        ],
        collapsable: false,
        sidebarDepth: 1
      },
      {
        title: 'Guides',
        path: '/guides/create-a-profile',
        children: [
          ['/guides/create-a-profile', 'Create a Profile'],
          ['/guides/nodes', 'For Nodes'],
          ['/guides/aggregators', 'For Aggregators'],
          ['/guides/data-holders', 'For Data Holders'],
          ['/guides/create-a-schema', 'Create a Schema']
        ],
        collapsable: false,
        sidebarDepth: 0
      },
      {
        title: 'Developers',
        path: '/developers/environments',
        children: [
          ['/developers/environments', 'Environments'],
          ['/developers/index-api', 'Index API'],
          ['/developers/library-api', 'Library API'],
          ['/developers/wp-aggregator', 'Wordpress Aggregator Plugin'],
          ['/developers/wp-node', 'Wordpress Node Plugin']
        ],
        collapsable: false,
        sidebarDepth: 1
      },
      {
        title: 'FAQs',
        path: '/faqs/general',
        children: [
          ['/faqs/general', 'General FAQs'],
          ['/faqs/schema', 'Schema FAQs']
        ],
        collapsable: false,
        sidebarDepth: 0
      }
    ]
  },
  dest: 'public'
}
