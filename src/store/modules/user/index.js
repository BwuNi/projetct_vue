import Info  from './info'
import System  from './system'

import convert from '../../convert'

export default convert({
    name:'User',
    parents:[],

    modules:{
        Info,
        System
    }
})