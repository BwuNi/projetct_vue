import system_type from './system/mutation.type'
import system from './system/system'

import info_type from './system/mutation.type'
import info from './system/system'

export default {
    namespaced: true,
    info:{
        [info.mod]:info,
    },
    modules:{
        [system_type.mod]:system,
    }
}