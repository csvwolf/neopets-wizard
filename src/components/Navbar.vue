<template>
  <common-navbar
    :routes="routes"
    title="Neopets Wizard"
  />
</template>
<script lang="ts">
import { defineComponent, readonly } from 'vue'

interface SetupResult {
  routes: Array<{ readonly title: string, readonly path: string }>
}

export default defineComponent({
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
