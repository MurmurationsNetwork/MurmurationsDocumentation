module.exports = {
  title: 'Murmurations',
  description: 'Documentation for the Murmurations Protocol',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/murmurations-logo.png',
    nav: [
      { text: 'FAQs', link: '/faqs/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'Technical Docs', link: '/technical/' }
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
        title: 'Technical Docs',
        path: '/technical/',
        children: [
          ['/technical/index-api', 'Index API'],
          ['/technical/library-api', 'Library API'],
          ['/technical/development-urls', 'Development URLs'],
          ['/technical/codebase', 'Overview of repos and codebase'],
          ['/technical/wp-aggregator', 'Wordpress Aggregator plugin'],
          ['/technical/wp-node', 'Wordpress Node plugin'],
          ['/technical/mpg', 'Murmurations Profile Generator']
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
