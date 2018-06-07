import { pageMap } from '../../../router/RouterName'
import loid from '../../../utils/common/loid'
console.log(pageMap)

export default {
    ['SET_PAGE'](state, name) {
        if (name) {
            state.activePageName = name
        } else {
            state.activePageName = ''
        }
    },
    ['ADD_PAGE'](state, { title, src, props, index }) {
        const
            name = loid('page'),
            _src = pageMap[src]?src:'root-home-hello'

        console.log({ title, src, props, index })

        if (index) {
            state.pages.splice(index, 0, {
                title,
                src:_src,
                props,
                name: name
            })
        } else {
            state.pages.push({
                title,
                src:_src,
                props,
                name: name
            })
        }

        state.activePageName = name
    },
    ['REMOVE_PAGE'](state, index) {
        state.pages.splice(index, 1)
    },
    ['INIT_TABS'](state, arr) {
        state.pages = arr
    }
}