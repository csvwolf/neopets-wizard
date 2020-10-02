<template>
  <nav class="navbar">
    <h1
      v-if="title"
      class="navbar__title"
    >
      <router-link
        class="navbar__title_link"
        to="/"
      >
        {{ title }}
      </router-link>
    </h1>
    <ul>
      <li
        v-for="route in routes"
        :key="route.path"
        class="navbar__item"
      >
        <router-link :to="route.path">
          {{ route.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface Route {
  title: string
  path: string
}

export default defineComponent({
  name: 'CommonNavbar',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    routes: {
      type: Object as PropType<Route[]>,
      required: true
    }
  }
})
</script>
<style lang="postcss" scoped>
.navbar {
  display: flex;
  border-bottom: 1px solid #ccc;
  height: 48px;
  line-height: 48px;
}

.navbar__title {
  margin: 0 16px;
  line-height: 48px;
}

.navbar__title_link {
  color: #137cbd;
}

.navbar__item {
  padding: 0 8px;
}
</style>
