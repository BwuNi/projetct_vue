export default {
    ['STATE'](state) {
        return state
    },
    ['ACTIVE_MOD'](state) {

    },
    ['MOD_BY_NID'](state) {
        return nid => state.modules.filter(v => (v.nid === nid))[0]
    },
    ['MOD_BY_SORT'](state) {
        return sort => state.modules.filter(v => (v.sort === sort))[0]
    }
}