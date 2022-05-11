module.exports = {
  title: 'Murmurations',
  description: 'Documentation for the Murmurations Protocol',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/murmurations-logo.png',
    nav: [
      { text: 'Introduction', link: '/about/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'Technical Docs', link: '/technical/' }
    ],
    sidebar: [
        {
          title : "About",
          path : '/about/',
          children: [
            ['/about/','Introduction'],
            '/about/common-terms',
            '/about/architecture',
            '/about/roadmap',
            '/about/faq',
            '/about/getting-support',
            '/about/contributing'
          ],
          collapsable: false,
          sidebarDepth: 2
        },
        {
          title : "Guides",
          path : '/guides/',
          children: [
            ['/guides/nodes','For nodes: put your project on the map'],
            ['/guides/aggregators','For aggregators: map your sector, area, or network'],
            ['/guides/data-holders','For data holders: share data into the Murmurations ecosystem'],
            ['/guides/create_a_schema','Create a Murmurations schema']
          ],
          collapsable: true,
          sidebarDepth: 2
        },
        {
          title : "Technical Docs",
          path : '/technical/',
          children: [
            ['/technical/index-api','Index API reference'],
            ['/technical/codebase','Overview of repos and codebase'],
            ['/technical/wp-aggregator','Wordpress Aggregator plugin'],
            ['/technical/wp-node','Wordpress Node plugin'],
            ['/technical/mpg','Murmurations Profile Generator'],
          ],
          collapsable: true,
          sidebarDepth: 2
        },
        /*
      '/guides/': [
        {
          children: ['guide1', 'guide2'],
          //collapsable: false,
          sidebarDepth: 2
        }
      ],
      '/technical/' : 'auto',
      */
      /*
      '/docs/': [
        {
          title: '',
          children: [['', 'Overview'], 'intro'],
          collapsable: false,
          sidebarDepth: 2
        },
        {
          title: '',
          children: ['advanced'],
          collapsable: false,
          sidebarDepth: 2
        }
      ],

      '/': [
        '',
      ]
      */
    ]
  },
  dest: 'public'
}
