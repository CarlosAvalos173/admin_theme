import { createApp } from 'vue'
import App from './App.vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import router from './router'
import axios from 'axios'
import  VueAxios from 'vue-axios'
import bootstrap from 'bootstrap'
//import Swal from 'sweetalert2/dist/sweetalert2.js'


const app = createApp(App)
app.use(router)
app.use(VueSidebarMenu)
app.use(bootstrap)
//app.use(Swal)
//app.use(axios)
app.use(VueAxios, axios)
app.mount("#app")