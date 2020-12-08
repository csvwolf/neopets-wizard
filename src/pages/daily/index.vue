<template>
  <div class="daily">
    <ul class="daily__list">
      <li
        class="daily__item"
      >
        <card
          :image="blueGrundo"
          title="Blue Grundo"
          @buttonClick="runAutoBlueGrundoGift"
        />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@components/Card.vue'
import BlueGrundo from '@/assets/daily/blue-grundo.gif'
import { runAutoBlueGrundoGift } from '@/services/daily'

export default defineComponent({
  components: {
    Card
  },
  setup() {
    return {
      blueGrundo: BlueGrundo,
      runAutoBlueGrundoGift
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
  }
}
</style>
