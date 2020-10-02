<template>
  <Navbar
    :routes="routes"
    title="Neopets Wizard"
  />
</template>
<script lang="ts">
import { defineComponent, readonly } from 'vue'
import Navbar from '@components/common/navbar/Navbar.vue'

interface SetupResult {
  routes: Array<{ readonly title: string, readonly path: string }>
}

export default defineComponent({
  components: {
    Navbar
  },
  setup() {
    const routes: SetupResult['routes'] = [{
      title: 'Daily Tasks',
      path: '/daily'
    }]
    return {
      routes: readonly(routes)
    }
  }
})
</script>
