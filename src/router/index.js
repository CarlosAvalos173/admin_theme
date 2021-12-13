import { createRouter, createWebHistory } from 'vue-router'

// const HelloWorld = require('../components/HelloWorld.vue');
import HelloWorld from '../components/HelloWorld.vue'
import Dashboard from '../components/Dashboard.vue'

export const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/hw',
        name: 'hw',
        component: HelloWorld,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router