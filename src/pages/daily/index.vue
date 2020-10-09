<template>
  <div>
    <ul>
      <li>
        <card
          :image="blueGrundo"
          title="Blue Grundo"
        />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@components/Card.vue'
import BlueGrundo from '@/assets/daily/blue-grundo.gif'

export default defineComponent({
  components: {
    Card
  },
  setup() {
    return {
      blueGrundo: BlueGrundo
    }
  }
})
</script>
