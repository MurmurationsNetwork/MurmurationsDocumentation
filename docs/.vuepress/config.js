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
          '/about/getting-support',
          '/about/contributing'
        ],
        collapsable: false,
        sidebarDepth: 0
      },
      {
        title: 'Guides',
        path: '/guides/',
        children: [
          ['/guides/nodes', 'For Nodes'],
          ['/guides/aggregators', 'For Aggregators'],
          ['/guides/data-holders', 'For Data Holders'],
          ['/guides/create_a_schema', 'Create a Schema']
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
          ['/developers/mpg', 'Profile Generator'],
          ['/developers/wp-aggregator', 'Wordpress Aggregator plugin'],
          ['/developers/wp-node', 'Wordpress Node plugin']
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
