import Vue from 'vue'
import Router from 'vue-router'

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
            path: '/dic/chooce',
            name: 'chooce',
            component: () => import('./views/dic/Chooce.vue'),
        },
        {
            path: '/dic/home',
            name: 'DicHome',
            component: () => import('./views/dic/Home.vue'),
            children: [
                {
                    path: '/dic/table',
                    name: 'DicTable',
                    component: () => import('./views/dic/Table.vue')
                },
            ]
        },
        {
            path: '/anxunsi',
            name: 'anxunsi',
            component: () => import('./views/Anxunsi.vue')
        },
    ]
})
