// @ts-ignore
import { defineUserConfig, defaultTheme } from 'vuepress';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { searchPlugin } from '@vuepress/plugin-search';
import { containerPlugin } from '@vuepress/plugin-container';
export default defineUserConfig({
  lang: 'zh-CN',
  title: 'cz-components',
  description: '组件库',
  locales: {
    '/': {
      lang: 'zh-CN'
    },
    '/us/': {
      lang: 'en-US'
    }
  },
  theme: defaultTheme({
    logo: 'https://s1.ax1x.com/2022/09/10/vOVha6.jpg',
    repo: 'https://gitlab.com/foo/bar',
    editLink: false,
    editLinkText: '编辑此页',
    editLinkPattern: '',
    sidebarDepth: 2,
    lastUpdated: true,
    lastUpdatedText: '更新时间',
    contributors: false,
    contributorsText: '贡献者',
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接'
    ],
    backToHome: '返回首页',
    navbar: [
      {
        text: '指南',
        link: '/'
      },
      {
        text: '组件',
        link: '/components/message.md'
      },
      {
        text: '主题',
        link: '/foo/'
      }
    ],
    sidebar: [
      // SidebarItem
      {
        text: 'Basic 基础组件',
        collapsible: false,
        children: ['button', 'message']
      }
    ],
    locales: {
      '/': {
        selectLanguageName: '简体中文'
      },
      '/us/': {
        selectLanguageName: 'English'
      }
    }
  }),
  plugins: [
    containerPlugin({
      type: 'tip'
    }),
    docsearchPlugin({
      apiKey: '',
      appId: '',
      indexName: ''
      // 配置项
    })
    // searchPlugin({
    //   // 配置项
    // }),
  ]
});
