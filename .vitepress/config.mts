import { defineConfig } from 'vitepress'
import rutile from "./sidebars/rutile";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",
  
  title: "Metallurgists of Create",
  description: "Realistic ore and mineral processing",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],



    sidebar: {
        ...rutile
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
