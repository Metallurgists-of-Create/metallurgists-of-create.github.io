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
                        {
                            text: 'KubeJS',
                            link: '/tfmg/pack-developers/kubejs',
                            collapsed: true,
                            items: [
                                {
                                    text: 'Recipes',
                                    link: '/tfmg/pack-developers/kubejs#recipes',
                                    collapsed: true,
                                    items: [
                                        { text: 'Casting', link: '/tfmg/pack-developers/kubejs#casting' },
                                        { text: 'Coking', link: '/tfmg/pack-developers/kubejs#coking' },
                                        { text: 'Distillation', link: '/tfmg/pack-developers/kubejs#distillation' },
                                        { text: 'Industrial Blasting', link: '/tfmg/pack-developers/kubejs#industrial-blasting' },
                                        { text: 'Polarizing', link: '/tfmg/pack-developers/kubejs#polarizing' },
                                        { text: 'Winding', link: '/tfmg/pack-developers/kubejs#winding' },
                                        { text: 'Hot Blasting (aka Air Blasting)', link: '/tfmg/pack-developers/kubejs#hot-blasting-aka-air-blasting' },
                                        { text: 'Chemical Vat', link: '/tfmg/pack-developers/kubejs#chemical-vat' }
                                    ]
                                },
                                {
                                    text: 'Registration',
                                    link: '/tfmg/pack-developers/kubejs#registration',
                                    collapsed: true,
                                    items: [
                                        { text: 'Vat Operations', link: '/tfmg/pack-developers/kubejs#vat-operations' },
                                        {
                                            text: 'Mixer Modes',
                                            link: '/tfmg/pack-developers/kubejs#mixer-modes',
                                            collapsed: true,
                                            items: [
                                                {
                                                    text: 'Registration',
                                                    link: '/tfmg/pack-developers/kubejs#registering-mixer-modes'
                                                },
                                                {
                                                    text: 'Custom Models',
                                                    link: '/tfmg/pack-developers/kubejs#custom-mixer-models'
                                                }
                                            ]
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
