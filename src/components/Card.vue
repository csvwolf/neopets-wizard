<template>
  <section class="card">
    <img
      class="card__img"
      :src="image"
    >
    <div class="card__title">
      {{ title }}
    </div>
  </section>
</template>
<style scoped lang="postcss">
.card {
  display: inline-block;
  flex: 1 1 auto;

  &__img {
    width: 100px;
    height: auto;
  }

  &__title {
    font-size: 16px;
  }
}
</style>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
})
</script>
