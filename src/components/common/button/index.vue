<template>
  <button class="button">
    <slot />
  </button>
</template>
<style lang="postcss" scoped>
.button {

}
</style>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CommonButton'
})
</script>
