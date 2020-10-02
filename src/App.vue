<template>
  <div>
    <navbar v-if="showNavbar" />
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ComputedRef } from 'vue'
import Navbar from '@/components/Navbar.vue'
import { useRoute } from 'vue-router'

interface SetupResult {
  showNavbar: ComputedRef<boolean>
}

export default defineComponent({
  components: {
    Navbar
  },
  setup(): SetupResult {
    const route = useRoute()
    const showNavbar = computed(() => route.path !== '/')
    return {
      showNavbar
    }
  }
})
</script>
