module.exports = {
  title: 'Murmurations',
  description: 'Documentation for the Murmurations Protocol',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/murmurations-logo.png',
    nav: [
      { text: 'FAQs', link: '/faqs/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'Developers', link: '/developers/' }
    ],
    sidebar: [
      {
        title: 'About',
        path: '/about/',
        children: [
          '/about/',
          '/about/common-terms',
          '/about/architecture',
          '/about/roadmap',
          '/about/contributing',
          '/about/getting-support'
        ],
        collapsable: false,
        sidebarDepth: 1
      },
      {
        title: 'Guides',
        path: '/guides/',
        children: [
          ['/guides/nodes', 'For Nodes'],
          ['/guides/aggregators', 'For Aggregators'],
          ['/guides/data-holders', 'For Data Holders'],
          ['/guides/create-a-profile', 'Create a Profile'],
          ['/guides/create-a-schema', 'Create a Schema']
        ],
        collapsable: false,
        sidebarDepth: 0
      },
      {
        title: 'Developer Docs',
        path: '/developers/',
        children: [
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
        path: '/faqs/',
        children: [
          ['/faqs/', 'General'],
          ['/faqs/technical', 'Technical'],
          ['/faqs/schemas', 'Schemas']
        ],
        collapsable: false,
        sidebarDepth: 0
      }
    ]
  },
  dest: 'public'
}
