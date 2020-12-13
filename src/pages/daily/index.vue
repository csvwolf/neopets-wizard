<template>
  <div class="daily">
    <ul class="daily__list">
      <li
        v-for="item in dailyItems"
        :key="item.title"
        class="daily__item"
      >
        <card
          :image="item.image"
          :title="item.title"
          @buttonClick="item.action"
        />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@components/Card.vue'
import DAILY_ITEMS from './daily'

export default defineComponent({
  components: {
    Card
  },
  setup() {
    return {
      dailyItems: DAILY_ITEMS
    }
  }
})
</script>
<style scoped lang="postcss">
.daily {
  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__item {
    cursor: pointer;
    margin: 0 16px;
  }
}
</style>
