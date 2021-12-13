import { createRouter, createWebHistory } from 'vue-router'

const HelloWorld = require('./components/HelloWorld.vue');

export const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: HelloWorld
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router