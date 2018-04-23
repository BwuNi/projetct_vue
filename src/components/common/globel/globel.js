import Model from './modal'
import Input from './form/input'
import Fieldset from './form/fieldset.vue'
import Radio from './form/radio.vue'
import CheckBox from './form/checkbox.vue'

export default {
    install: function (Vue) {
        Vue.component('bwu-modal', Model)
        Vue.component('bwu-input', Input)
        Vue.component('bwu-fieldset', Fieldset),
        Vue.component('bwu-radio', Radio),
        Vue.component('bwu-checkbox', CheckBox)
    }
}