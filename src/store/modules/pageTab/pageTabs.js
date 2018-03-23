import mutations from './mutations'

export default {
    namespaced: true,
    mutations,
    state: {
        activePageName: 'root-home-hello',
        pages: [{
            title: 'hello',
            src: 'root-home-hello',
            name: 'root-home-hello'
        },
        {
            title: 'Page_1',
            src: 'root-home-Page_1',
            name: 'root-home-Page_1'
        }]
    },
}