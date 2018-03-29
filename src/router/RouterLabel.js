import root from '../components/modules/index'


const RouterLabeler = (mod, name = '') => (
    {
        label: mod.name,
        children: mod.children ? mod.children.map((value) => (
            value.name && value.component ? {
                label: value.name,
                src: name + (name ? '-' : '') + mod.name + (mod.name ? '-' : '') + value.name
            }
                : value.mod ? RouterLabeler(value.mod, name + (name ? '-' : '') + mod.name)
                    : {}
        )) : []
    }
)


export default RouterLabeler(root)