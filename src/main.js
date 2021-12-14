import { createApp } from 'vue'
import App from './App.vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import router from './router'
// import axios from 'axios'

const app = createApp(App)
app.use(router)
app.use(VueSidebarMenu)
// app.use(axios)
app.mount("#app")