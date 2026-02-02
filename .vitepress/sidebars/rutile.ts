import { DefaultTheme } from "vitepress";

export default {
    '/rutile/': [
        {
            text: 'Rutile',
            link: '/rutile/',
            items: [
                {
                    text: 'For Mod Developers',
                    collapsed: true,
                    items: [
                        { text: 'Depending on Rutile', link: '/rutile/mod-developers/depending'},
                        { text: 'Creating the Plugin', link: '/rutile/mod-developers/plugin'},
                        { text: 'Registering Your Objects', link: '/rutile/mod-developers/registry'},
                    ]
                },
                {
                    text: 'For Pack Developers',
                    collapsed: true,
                    items: [
                        { text: 'KubeJS Integration', link: '/rutile/pack-developers/kubejs'}
                    ]
                }
            ]
        }
    ]
}
