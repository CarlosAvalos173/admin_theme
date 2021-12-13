// import { createApp } from 'vue'
import vue from 'vue'
window.Vue = vue

import App from './App.vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueRouter from 'vue-router'
import {routes} from './routes'
import Vue from 'vue'
import router from './router'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(VueSidebarMenu)

// const app = createApp(App)
// app.use(VueSidebarMenu)
// app.use(VueRouter)
// app.mount("#app")

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})

app.mount('#app')
