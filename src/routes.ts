import Index from '@pages/index/index.vue'
import Daily from '@pages/daily/index.vue'
import Clocking from '@pages/clocking/index.vue'

export default [
  {
    path: '/',
    component: Index
  },
  {
    path: '/daily',
    component: Daily
  },
  {
    path: '/clocking',
    component: Clocking
  }
]
