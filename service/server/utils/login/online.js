const
    uuid = require('uuid/v4'),
    id_map = {},
    name_map = {},
    name_id_map = map = {}

module.exports = {
    sub(name, data = true) {
        if (name_map[name]) {}

        let id = uuid(),
            name_id = name + '__' + id

        name_map[name] = id
        id_map[id] = name
        name_id_map[name_id] = data

        return id
    },
    cancel(id) {
        if (!id_map[id]) {
            return
        }

        const
            name = id_map[id]


        name_map[name] = null
        id_map[id] = null
        name_id_map[name_id] = null

    },
    check(id) {
        if (!id_map[id]) {
            return false
        }

        const
            name = id_map[id],
            name_id = name + '__' + id

        return name_id_map[name_id]

    }
}