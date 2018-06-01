import mutations  from './mutations'
import actions  from './actions'
import state  from './state'
import getters from './getters'

import convert from '../../../convert'

export default convert({
    mod:'System',
    parents:['User'],

    actions,
    mutations,
    state,
    getters
})