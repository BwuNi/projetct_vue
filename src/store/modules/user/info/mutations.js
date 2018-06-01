export default {
    ['INIT_MOD'](state,{
        modules,
        active
    }) {
        state.modules = modules
        state.active = active ? active : state.modules[0].nid
    },
    ['CHANGE_MOD'](state, nid) {
        state.active = nid ? nid : state.modules[0].nid
    }
}