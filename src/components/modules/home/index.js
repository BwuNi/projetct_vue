import test from './test'

export default {
    name: 'home',
    children: [
        { name: 'Page_1', component: () => import('./Page_1.vue')},
        { name: 'Page_2', component: () => import('./Page_2.vue')},
        { name: 'hello', component: () => import('./Hello.vue')},
        { name: 'form', component: () => import('./Form.vue')},
        { name: 'menu', component: () => import('./_menu/index.vue')},
        { mod: test }
    ]
}