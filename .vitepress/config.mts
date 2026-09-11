import { defineConfig } from 'vitepress'
import rutile from "./sidebars/rutile";
import metallurgica from "./sidebars/metallurgica";
import chemica from "./sidebars/chemica";
import tfmg from "./sidebars/tfmg";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  srcDir: "src",

  ignoreDeadLinks: true,
  cleanUrls: true,

  title: "Metallurgists of Create",
  description: "Bringing realism to Minecraft. One mod at a time.",

  head: [["link", { rel: "icon", href: "/assets/rutile-icon-small.webp" }]],

  themeConfig: {
    //logo: {
    //    src: "/assets/rutile-icon-small.webp",
    //    width: 24,
    //    height: 24,
    //},

    search: {
        provider: "local"
    },

    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: {
        ...rutile,
        ...metallurgica,
        ...chemica,
        ...tfmg
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Metallurgists-of-Create' }
    ]
  },

  sitemap: {
    hostname: 'https://metallurgists-of-create.github.io'
  },

  async transformHead(context) {
    if (context.page === 'index.md') {
      return [[
        'meta',
        { name: 'google-site-verification', content: "oXUWquHpTOq3hyo1dSWwlhXA8XtiYumn4QgpYMseIGY" }
      ]]
    }
    return
  }
})
