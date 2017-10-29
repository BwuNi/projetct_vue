import getters from './getter'
import mutations  from './mutation'
import actions from './actions'

export default {
    mutations,
    actions,
    getters,
    state: {
        isLoading:false
    },
}