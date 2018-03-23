import Vue from 'vue'
import Router from 'vue-router'

import RouterName from './RouterName'
import RouterLabel from './RouterLabel'


export default {
    install: function (Vue) {
        RouterName.forEach(value => {
            Vue.component(value.name, value.component)
        })
    }
};




