export default function (obj) {
    let mod = obj.mod,
        par = obj.parents?obj.parents.join("/")+'/':'',
        type = {mutations:{},mod:mod}

    for (name in obj) {
        if (!obj.hasOwnProperty(name) || name == 'module' || name == 'parents'|| name == 'mod'|| name == 'mutations') continue ;

        type[name] = obj[name]
        type.mutations[name] =par + mod + '/' + obj[name]
    }

    return type
}