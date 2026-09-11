import { DefaultTheme } from "vitepress";

export default {
    '/tfmg/': [
        {
            text: 'TFMG',
            link: '/tfmg/',
            items: [
                {
                    text: 'For Users',
                    collapsed: true,
                    items: [
                        { text: 'Getting Started', link: '/tfmg/users/getting-started' }
                    ]
                },
                {
                    text: 'For Mod Developers',
                    collapsed: true,
                    items: [
                        { text: 'Depending', link: '/tfmg/mod-developers/depending' }
                    ]
                },
                {
                    text: 'For Pack Developers',
                    collapsed: true,
                    items: [
                        { text: 'Datapack', link: '/tfmg/pack-developers/datapack' },
                        { text: 'KubeJS', link: '/tfmg/pack-developers/kubejs' }
                    ]
                }
            ]
        }
    ]
}
