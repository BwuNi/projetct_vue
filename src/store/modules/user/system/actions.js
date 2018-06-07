import Ajax from '@/utils/ajax'

export default {
    ['CHANGE_MOD']({ commit, state, getters }, { sort, nid }) {
        // 如果存在则直接跳转
        if (getters['MOD_BY_NID'](nid).pages.length)
            return commit('CHANGE_MOD', nid)

        // 如果不存在则获取 pages
        Ajax()
            .data(sort)
            .get('GetMyMenuChilds')
            .then(({ data }) => {
                // 添加 pages
                commit('SET_PAGE', {
                    nid,
                    pages: list2Tree(
                        data.map(v => ({
                            nid: v.MID,
                            pid: v.PMID,
                            title: v.MNAME,
                            sort: v.SORT,
                            src:v.URL
                        })),
                        'nid',
                        'pid'
                    )[0].children
                })
                // 跳转
                commit('CHANGE_MOD', nid)
            })
    }
}


function list2Tree(list = [], id = 'MID', pid = 'PMID') {
    const
        table = {},
        roots = []

    list.forEach(v => {
        const
            _id = v[id],
            _pid = v[pid]

        // 初始化 target
        let target = null

        if (table[_id]) {
            target = table[_id]
        } else {
            table[_id] = target = { children: [] }
        }
        Object.assign(target, v)

        // 判断父级节点
        if (!_pid) {
            roots.push(target)
        } else {
            if (table[_pid]) {
                if (table[_pid].children) table[_pid].children.push(target)
                else table[_pid].children = [target]
            } else {
                table[_pid] = { children: [target] }
            }
        }
    })

    return roots
}