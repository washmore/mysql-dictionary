import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/dic/home',
        },
        {
            path: '/dic/home',
            name: 'DicHome',
            component: () => import('./views/dic/Home.vue')
        },
        {
            path: '/anxunsi',
            name: 'anxunsi',
            component: () => import('./views/Anxunsi.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue')
        }
    ]
})
