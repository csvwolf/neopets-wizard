import { createApp, App as VueApp } from 'vue'
import * as VueRouter from 'vue-router'

import Navbar from '@components/common/navbar'
import Button from '@components/common/button'

import App from './App.vue'
import routes from './routes'
import './index.css'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

const install = (app: VueApp): void => {
  Navbar(app)
  Button(app)
}

const app = createApp(App)
install(app)

app.use(router)
app.mount('#app')
