// 插件配置
module.exports = [
  // 全文搜索插件
  'fulltext-search',
  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  [
    "vuepress-plugin-vssue-global",
    {
      platform: "github",
      title: "[Comment]<%- frontmatter.title %>",
      needComments: true,
      // 其他的 Vssue 配置
      autoCreateIssue: true,
      clientId: "72d2b8f754310fa5e5b7",
      clientSecret: "1bdaec0e39d8f85ab93c731781d70af65de3d7db",
      owner: "blackcat308",
      repo: "blackcat308.github.io",
    },
  ],
  // 增强 markdown
  [
    "md-enhance", {
      // 启用 TeX 支持
      tex: true,
      // Enable mermaid
      mermaid: true,
      // 启用流程图
      flowchart: true,
    },
  ],
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
]
