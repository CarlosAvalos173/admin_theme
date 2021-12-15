import { createRouter, createWebHistory } from 'vue-router'

// const HelloWorld = require('../components/HelloWorld.vue');

//Importacion de los componentes para rutas
import HelloWorld from '../components/HelloWorld.vue'
import Dashboard from '../components/Dashboard.vue'
import Blank from '../components/Blank.vue'
import Inventory from '../components/Inventory.vue'
import Sales from '../components/Sales.vue'
import Movements from '../components/Movements.vue'
import Clients from '../components/Clients.vue'
import Providers from '../components/Providers.vue'
import Cashiers from '../components/Cashiers.vue'

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
        path: '/movements',
        name: 'movements',
        component: Movements,
    },
    {
        path: '/clients',
        name: 'clients',
        component: Clients,
    },
    {
        path: '/providers',
        name: 'providers',
        component: Providers,
    },
    {
        path: '/cashiers',
        name: 'cashiers',
        component: Cashiers,
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