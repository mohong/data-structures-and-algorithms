module.exports = {
  base: '/data-structures-and-algorithms/',
  title: '数据结构与算法',
  description: '数据结构与算法学习笔记',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: 'http://arthas.com.cn' }
    ],
    sidebar: [
      {
        title: '基础排序',
        collapsable: false,
        children: [
          ['/base-sort/introduction', 'introduction'],
          ['/base-sort/bubble-sort', '冒泡排序'],
          ['/base-sort/selection-sort', '选择排序'],
          ['/base-sort/insertion-sort', '插入排序']
        ]
      }
    ]
  }
}