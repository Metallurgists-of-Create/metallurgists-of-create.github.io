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
                        { text: 'Materials', collapsed: true, link: '/rutile/mod-developers/materials', items: [
                                { text: 'Creating Your First Material', link: '/rutile/mod-developers/materials/first-material' },
                                { text: 'Adding Flags', link: '/rutile/mod-developers/materials/flags' },
                                { text: 'Creating Prefixes', link: '/rutile/mod-developers/materials/prefixes' },
                        ]}
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
