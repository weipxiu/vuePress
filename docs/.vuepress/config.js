module.exports = {
  //页面顶部title
  title: 'Hello VuePress',
  //页面描述
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          'get-started/',
        ]
      },
      {
        title: '组件',
        children: ['/components/button']
      }
    ]
  }
}