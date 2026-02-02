import { DefaultTheme } from "vitepress";

export default {
    '/metallurgica/': [
        {
            text: 'Metallurgica',
            link: '/metallurgica/',
            items: [
                {
                    text: 'For Users',
                    link: '/metallurgica/users/index',
                    collapsed: true,
                    items: [
                        { text: 'Getting Started', link: '/metallurgica/users/getting-started'}
                    ]
                },
                {
                    text: 'For Mod Developers',
                    collapsed: true,
                    items: [
                        { text: 'Getting Started', link: '/metallurgica/mod-developers/getting-started'}
                    ]
                },
                {
                    text: 'For Pack Developers',
                    collapsed: true,
                    items: [
                        { text: 'Getting Started', link: '/metallurgica/pack-developers/getting-started'}
                    ]
                }
            ]
        }
    ]
}
