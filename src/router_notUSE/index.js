import Vue from 'vue'
import Router from 'vue-router'

import RouterName from './RouterName'
import RouterLabel from './RouterLabel'

Vue.use(Router)

let name_component = {}

RouterName.forEach(value => {
    name_component[value.name] = value.component
})

export default new Router({
    routes: [
        {
            path: '/',
            components: name_component
        }
    ]
})
