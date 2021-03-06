import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import App from './App.vue'
import routes from './routes'
import './index.css'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
