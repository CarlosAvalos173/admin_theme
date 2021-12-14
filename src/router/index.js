import { createRouter, createWebHistory } from 'vue-router'

// const HelloWorld = require('../components/HelloWorld.vue');

//Importacion de los componentes para rutas
import HelloWorld from '../components/HelloWorld.vue'
import Dashboard from '../components/Dashboard.vue'
import Blank from '../components/Blank.vue'
import Inventory from '../components/Inventory.vue'
import Sales from '../components/Sales.vue'

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
        path: '/sales',
        name: 'sales',
        component: Sales,
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