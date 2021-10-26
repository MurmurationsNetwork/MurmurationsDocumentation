module.exports = {
  title: 'Murmurations',
  description: 'Documentation for the Murmurations Protocol',
  themeConfig: {
    logo: '/murmurations-logo.png',
    nav: [
      { text: 'Docs', link: '/docs/' },
      { text: 'Architecture', link: '/architecture/' },
      { text: 'Guides', link: '/guides/guide1' }
    ],
    sidebar: {
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
      '/architecture/': [
        {
          children: [['', 'Introduction'], 'json-schema', 'fields'],
          collapsable: false,
          sidebarDepth: 2
        }
      ],
      '/guides/': [
        {
          children: ['guide1', 'guide2'],
          collapsable: false,
          sidebarDepth: 2
        }
      ],
      '/': []
    }
  },
  dest: 'public'
}
