import Hello from '@/components/pages/Hello'
import Page_1 from '@/components/pages/Page_1'
import Page_2 from '@/components/pages/Page_2'

import test from './test/mod'

export default {
    name: 'home',
    children: [
        { name: 'Page_1', component: Page_1 },
        { name: 'Page_2', component: Page_2 },
        { name: 'hello', component: Hello },
        { mod: test }
    ]
}