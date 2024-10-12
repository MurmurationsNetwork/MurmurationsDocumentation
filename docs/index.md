---
layout: doc
title: Redirecting...
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

onMounted(() => {
  const router = useRouter()
  router.go('/about/introduction')
})
</script>

If you are not redirected automatically, follow this [link to the introduction](/about/introduction).
