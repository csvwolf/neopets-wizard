<template>
  <el-card class="card">
    <img
      :src="image"
      class="image"
      :alt="title"
    >
    <div>
      <div>{{ title }}</div>
      <el-button
        type="text"
        class="button"
        @click="clickButton"
      >
        走一个
      </el-button>
    </div>
  </el-card>
</template>
<script lang="ts">
import { defineComponent, SetupContext } from 'vue'

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
  },
  emits: ['buttonClick'],
  setup(props, { emit }: SetupContext) {
    const clickButton = () => {
      emit('buttonClick')
    }
    return {
      clickButton
    }
  }
})
</script>
<style scoped lang="postcss">
.card {
  width: 200px;
}
</style>
