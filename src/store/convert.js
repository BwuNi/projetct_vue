/**
 * 转换 vuex module
 * @param {obj} mod { mod: string, parents: array, mutations, getters, state, actions}
 * @returns { ...mod, namespace = true, mut, act, get}
 */

export default function(mod) {
    mod.namespaced = true
    if (!mod.parents) mod.parents = []

    if (!mod.getters)
        mod.getters = {
            ['STATE']:function(state) { return state }
        }
    else
        mod.getters = Object.assign({
            ['STATE']:function(state) { return state }
        }, mod.getters)

    ;
    ['actions', 'mutations', 'getters'].forEach(v => {
        if (!mod[v]) return
        for (let name in mod[v]) {
            add[v](
                mod,
                name,
                (mod.parents.length === 0 ?
                    '' :
                    (mod.parents.join('/') + '/')
                ) + mod.mod + '/' + name)
        }
    })

    return mod
}

let add = {
    mutations(obj, name, value) {
        if (!obj.mut) obj.mut = {}
        obj.mut[name] = value
        return obj
    },
    actions(obj, name, value) {
        if (!obj.act) obj.act = {}
        obj.act[name] = value
        return obj
    },
    getters(obj, name, value) {
        if (!obj.get) obj.get = {}
        obj.get[name] = value
        return obj
    }
}