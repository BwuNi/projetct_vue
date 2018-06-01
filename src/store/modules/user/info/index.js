import mutations  from './mutations'
import state  from './state'

import convert from '../../../convert'

export default convert({
    mod:'Info',
    parents:['User'],

    mutations,
    state
})