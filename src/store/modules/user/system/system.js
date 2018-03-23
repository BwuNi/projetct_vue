import mutations from './mutations'

export default {
    namespaced: true,
    mutations,
    state: {
        active: '1',
        modules: [
            {
                name: '数据管理',
                nid: '1',
                icon: 'icons-desktopwindows',
                pages: [
                    {
                        title: 'Hello',
                        children: [
                            {
                                title: 'Vue',
                                children: [
                                    {
                                        title: 'Hello Vue',
                                        src: 'root-home-hello'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'Pages',
                        children: [
                            {
                                title: 'Blank_page',
                                children: [
                                    {
                                        title: 'Page_1',
                                        src: 'root-home-Page_1'
                                    }
                                ]
                            },
                            {
                                title: 'Filled_page',
                                children: [
                                    {
                                        title: 'Page_2',
                                        src: 'root-home-Page_2'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: '一级 3',
                        children: [
                            {
                                title: '二级 3-1',
                                children: [
                                    {
                                        title: '三级 3-1-1'
                                    }
                                ]
                            },
                            {
                                title: '二级 3-2',
                                children: [
                                    {
                                        title: '三级 3-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: '资产管理',
                nid: '2',
                icon: 'icons-attachmoney',
                pages: []
            },
            {
                name: '门户首页',
                nid: '3',
                icon: 'icons-home',
                pages: []
            }
        ]
    },
}
