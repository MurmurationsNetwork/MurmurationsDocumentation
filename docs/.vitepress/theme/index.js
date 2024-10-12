import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { useRoute, useData } from 'vitepress'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout() {
    const route = useRoute()
    const { frontmatter } = useData()

    if (route.path === '/') {
      return h('div', {}, [
        h('script', {}, `
          window.location.href = '/about/introduction';
        `)
      ])
    }

    return h(DefaultTheme.Layout)
  }
}
