import test from './test/mod'

export default {
    name: 'home',
    children: [
        { name: 'Page_1', component: () => import('@/components/pages/Page_1')},
        { name: 'Page_2', component: () => import('@/components/pages/Page_2')},
        { name: 'hello', component: () => import('@/components/pages/Hello')},
        { mod: test }
    ]
}