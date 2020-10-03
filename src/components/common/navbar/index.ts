import { App } from 'vue'
import Navbar from './index.vue'

export default (app: App): void => {
  app.component(Navbar.name, Navbar)
}
