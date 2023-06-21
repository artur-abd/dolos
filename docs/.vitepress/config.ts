import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dolos",
  description: "Source Code Plagiarism Detection",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Examples', link: '/try/' },
      { text: 'Use Dolos', link: 'https://dolos.ugent.be/server' },
    ],

    sidebar: [
      { text: "Introduction", link: "/guide/" },
      {
        text: 'Server',
        items: [
          { text: 'Using Dolos server', link: '/guide/server' },
          { text: 'Use case: Dodona', link: '/guide/dodona' },
        ]
      },
      {
        text: 'CLI & Library',
        items: [
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Running the Dolos CLI', link: '/guide/running' },
          { text: 'Run Dolos using docker', link: '/guide/docker' },
          { text: 'Adding new languages', link: '/guide/adding-languages' },
        ]
      },
      {
        text: 'About Dolos',
        items: [
          { text: 'How Dolos works', link: '/about/algorithm' },
          { text: 'Supported programming languages', link: '/about/languages' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dodona-edu/dolos' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: "Made by Team Dodona with ❤️"
    }
  }
})
