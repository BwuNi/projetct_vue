import System_Type from './system/mutation.type'
import System from './system/system'

export default {
    namespaced: true,

    modules:{
        [System_Type.mod]:System,
    }
}