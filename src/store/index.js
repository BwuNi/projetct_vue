import Loading from './modules/loading'
import PageTabs from './modules/pageTabs'
import User from './modules/user'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

console.log({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        Loading,
        PageTabs,
        User
    }
})

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        Loading,
        PageTabs,
        User
    }
})