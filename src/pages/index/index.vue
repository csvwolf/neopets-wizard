<template>
  <img
    alt="Vue logo"
    src="../../assets/grundo.png"
  >
  <h1>Neopets Wizard</h1>
  <navbar />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './Navbar.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar
  }
})
</script>
