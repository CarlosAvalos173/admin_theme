import { createRouter, createWebHistory } from 'vue-router'

// const HelloWorld = require('../components/HelloWorld.vue');
import HelloWorld from '../components/HelloWorld.vue'
import Dashboard from '../components/Dashboard.vue'
import Blank from '../components/Blank.vue'
import Inventory from '../components/Inventory.vue'

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
    },
    {
        path: '/blank',
        name: 'blank',
        component: Blank,
    },
    {
        path: '/inventory',
        name: 'inventory',
        component: Inventory,
    },
    {
        path: '/edit/:id',
        name: 'editProduct',
        component: Blank,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router