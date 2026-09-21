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
                        { text: 'Welcome', link: '/tfmg/users/' },
                        { text: 'Getting Started', link: '/tfmg/users/getting-started' },
                        { text: 'Community Edition FAQ', link: '/tfmg/users/ce-faq' }
                    ]
                },
                {
                    text: 'For Mod Developers',
                    collapsed: true,
                    items: [
                        { text: 'Depending', link: '/tfmg/mod-developers/depending' },
                        { text: 'Registering Your Objects', link: '/tfmg/mod-developers/registry' }
                    ]
                },
                {
                    text: 'For Pack Developers',
                    collapsed: true,
                    items: [
                        {
                            text: 'Datapacks',
                            link: '/tfmg/pack-developers/datapack',
                            collapsed: true,
                            items: [
                                {
                                    text: 'Engine Fuels',
                                    link: '/tfmg/pack-developers/datapack/engine-fuel'
                                },
                                {
                                    text: 'Flamethrower Fuels',
                                    link: '/tfmg/pack-developers/datapack/flamethrower-fuel'
                                },
                                {
                                    text: 'Fire Extinguisher Fuels',
                                    link: '/tfmg/pack-developers/datapack/fire-extinguisher-fuel'
                                }
                            ]
                        },
                        {
                            text: 'KubeJS',
                            link: '/tfmg/pack-developers/kubejs',
                            collapsed: true,
                            items: [
                                {
                                    text: 'Recipes',
                                    link: '/tfmg/pack-developers/kubejs/recipes',
                                    collapsed: true,
                                    items: [
                                        { text: 'Casting', link: '/tfmg/pack-developers/kubejs/recipes#casting' },
                                        { text: 'Coking', link: '/tfmg/pack-developers/kubejs/recipes#coking' },
                                        { text: 'Distillation', link: '/tfmg/pack-developers/kubejs/recipes#distillation' },
                                        { text: 'Industrial Blasting', link: '/tfmg/pack-developers/kubejs/recipes#industrial-blasting' },
                                        { text: 'Polarizing', link: '/tfmg/pack-developers/kubejs/recipes#polarizing' },
                                        { text: 'Winding', link: '/tfmg/pack-developers/kubejs/recipes#winding' },
                                        { text: 'Hot Blasting (aka Air Blasting)', link: '/tfmg/pack-developers/kubejs/recipes#hot-blasting-aka-air-blasting' },
                                        { text: 'Chemical Vat', link: '/tfmg/pack-developers/kubejs/recipes#chemical-vat' }
                                    ]
                                },
                                {
                                    text: 'Vat Registries',
                                    collapsed: true,
                                    items: [
                                        { text: 'Vat Operations', link: '/tfmg/pack-developers/kubejs/registry/vat/operation' },
                                        {
                                            text: 'Mixer Modes',
                                            link: '/tfmg/pack-developers/kubejs/registry/vat/mixer',
                                            collapsed: true,
                                            items: [
                                                {
                                                    text: 'Registration',
                                                    link: '/tfmg/pack-developers/kubejs/registry/vat/mixer'
                                                },
                                                {
                                                    text: 'Custom Models',
                                                    link: '/tfmg/pack-developers/kubejs/registry/vat/mixer#custom-models'
                                                }
                                            ]
                                        },
                                        { text: 'Electrodes', link: '/tfmg/pack-developers/kubejs/registry/vat/electrode' }
                                    ]
                                },
                                {
                                    text: 'Fuel Registries',
                                    collapsed: true,
                                    items: [
                                        { text: 'Engine Fuel', link: '/tfmg/pack-developers/kubejs/registry/fuel/engine' },
                                        { text: 'Flamethrower Fuel', link: '/tfmg/pack-developers/kubejs/registry/fuel/flamethrower' }
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
