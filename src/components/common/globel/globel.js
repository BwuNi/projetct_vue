import Model from './modal'
import Input from './form/input'
import Fieldset from './form/fieldset.vue'

export default {
    install: function (Vue) {
        Vue.component('bwu-modal', Model)
        Vue.component('bwu-input', Input)
        Vue.component('bwu-fieldset', Fieldset)
    }
}