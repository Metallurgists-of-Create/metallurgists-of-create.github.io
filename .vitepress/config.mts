import { defineConfig } from 'vitepress'
import rutile from "./sidebars/rutile";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  srcDir: "src",
  
  title: "Metallurgists of Create",
  description: "Realistic ore and mineral processing",

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
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],



    sidebar: {
        ...rutile
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
