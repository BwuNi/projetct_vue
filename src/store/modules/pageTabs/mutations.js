export default {
    ['SET_PAGE'](state, name) {
        if (name) {
            state.activePageName = name
        } else {
            state.activePageName = ''
        }
    },
    ['ADD_PAGE'](state, { title, src, props, index }) {
        const name = loid('page')

        if (index) {
            state.pages.splice(index, 0, {
                title,
                src,
                props,
                name: name
            })
        } else {
            state.pages.push({
                title,
                src,
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