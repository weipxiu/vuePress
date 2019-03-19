module.exports = {
  title: "web开发",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "单页", link: "/projects/" },
      { text: "分栏", link: "/guide/" },
      { text: "Markdown Demo", link: "/article/" },
      { text: "仓库", link: "https://github.com/weipxiu/vuePress" }
    ],
    sidebar: {
      // 侧边栏在 /guide/ 上
      '/guide/': [
        {
          title:'如何学习前端',
          collapsable: false,
          children:[
            '',
            'getting-started',
            'customize',
            'advanced'
          ]
        },
        {
          title:'如何学习后端',
          collapsable: false,
          children:[
            'getting-started_1',
            'customize_1',
            'advanced_1'
          ]
        }
      ]
    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};



