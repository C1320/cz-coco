// docs/.vuepress/config.ts
import { defineUserConfig, defaultTheme } from "vuepress";
import demoblockPlugin from "vuepress-plugin-demoblock-plus";
var config_default = defineUserConfig({
  lang: "zh-CN",
  title: "cz-components",
  description: "\u7EC4\u4EF6\u5E93",
  locales: {
    "/": {
      lang: "zh-CN"
    },
    "/us/": {
      lang: "en-US"
    }
  },
  theme: defaultTheme({
    logo: "https://s1.ax1x.com/2022/09/10/vOVha6.jpg",
    repo: "https://gitlab.com/foo/bar",
    editLink: false,
    editLinkText: "\u7F16\u8F91\u6B64\u9875",
    editLinkPattern: "",
    sidebarDepth: 2,
    lastUpdated: true,
    lastUpdatedText: "\u66F4\u65B0\u65F6\u95F4",
    contributors: false,
    contributorsText: "\u8D21\u732E\u8005",
    notFound: [
      "\u8FD9\u91CC\u4EC0\u4E48\u90FD\u6CA1\u6709",
      "\u6211\u4EEC\u600E\u4E48\u5230\u8FD9\u6765\u4E86\uFF1F",
      "\u8FD9\u662F\u4E00\u4E2A 404 \u9875\u9762",
      "\u770B\u8D77\u6765\u6211\u4EEC\u8FDB\u5165\u4E86\u9519\u8BEF\u7684\u94FE\u63A5"
    ],
    backToHome: "\u8FD4\u56DE\u9996\u9875",
    navbar: [
      {
        text: "\u6307\u5357",
        link: "/"
      },
      {
        text: "\u7EC4\u4EF6",
        link: "/components/message.md"
      },
      {
        text: "\u4E3B\u9898",
        link: "/foo/"
      }
    ],
    sidebar: [
      {
        text: "Basic \u57FA\u7840\u7EC4\u4EF6",
        collapsible: false,
        children: ["button", "message"]
      }
    ],
    locales: {
      "/": {
        selectLanguageName: "\u7B80\u4F53\u4E2D\u6587"
      },
      "/us/": {
        selectLanguageName: "English"
      }
    }
  }),
  plugins: [
    demoblockPlugin({
      customClass: "demoblock-custom",
      theme: "github-light",
      cssPreprocessor: "scss",
      scriptReplaces: [
        {
          searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
          replaceValue: "const { defineComponent: _defineComponent } = Vue"
        }
      ]
    })
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRzovdnVlLXByb2plY3QvY3otY29jby9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRzpcXFxcdnVlLXByb2plY3RcXFxcY3otY29jb1xcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0c6L3Z1ZS1wcm9qZWN0L2N6LWNvY28vZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzXCI7Ly8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnLCBkZWZhdWx0VGhlbWUgfSBmcm9tICd2dWVwcmVzcyc7XHJcbmltcG9ydCB7IGRvY3NlYXJjaFBsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tZG9jc2VhcmNoJztcclxuaW1wb3J0IGRlbW9ibG9ja1BsdWdpbiAgZnJvbSAndnVlcHJlc3MtcGx1Z2luLWRlbW9ibG9jay1wbHVzJztcclxuaW1wb3J0IHsgY29udGFpbmVyUGx1Z2luIH0gZnJvbSAnQHZ1ZXByZXNzL3BsdWdpbi1jb250YWluZXInO1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcclxuICBsYW5nOiAnemgtQ04nLFxyXG4gIHRpdGxlOiAnY3otY29tcG9uZW50cycsXHJcbiAgZGVzY3JpcHRpb246ICdcdTdFQzRcdTRFRjZcdTVFOTMnLFxyXG4gIGxvY2FsZXM6IHtcclxuICAgICcvJzoge1xyXG4gICAgICBsYW5nOiAnemgtQ04nXHJcbiAgICB9LFxyXG4gICAgJy91cy8nOiB7XHJcbiAgICAgIGxhbmc6ICdlbi1VUydcclxuICAgIH1cclxuICB9LFxyXG4gIHRoZW1lOiBkZWZhdWx0VGhlbWUoe1xyXG4gICAgbG9nbzogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMi8wOS8xMC92T1ZoYTYuanBnJyxcclxuICAgIHJlcG86ICdodHRwczovL2dpdGxhYi5jb20vZm9vL2JhcicsXHJcbiAgICBlZGl0TGluazogZmFsc2UsXHJcbiAgICBlZGl0TGlua1RleHQ6ICdcdTdGMTZcdThGOTFcdTZCNjRcdTk4NzUnLFxyXG4gICAgZWRpdExpbmtQYXR0ZXJuOiAnJyxcclxuICAgIHNpZGViYXJEZXB0aDogMixcclxuICAgIGxhc3RVcGRhdGVkOiB0cnVlLFxyXG4gICAgbGFzdFVwZGF0ZWRUZXh0OiAnXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0JyxcclxuICAgIGNvbnRyaWJ1dG9yczogZmFsc2UsXHJcbiAgICBjb250cmlidXRvcnNUZXh0OiAnXHU4RDIxXHU3MzJFXHU4MDA1JyxcclxuICAgIG5vdEZvdW5kOiBbXHJcbiAgICAgICdcdThGRDlcdTkxQ0NcdTRFQzBcdTRFNDhcdTkwRkRcdTZDQTFcdTY3MDknLFxyXG4gICAgICAnXHU2MjExXHU0RUVDXHU2MDBFXHU0RTQ4XHU1MjMwXHU4RkQ5XHU2NzY1XHU0RTg2XHVGRjFGJyxcclxuICAgICAgJ1x1OEZEOVx1NjYyRlx1NEUwMFx1NEUyQSA0MDQgXHU5ODc1XHU5NzYyJyxcclxuICAgICAgJ1x1NzcwQlx1OEQ3N1x1Njc2NVx1NjIxMVx1NEVFQ1x1OEZEQlx1NTE2NVx1NEU4Nlx1OTUxOVx1OEJFRlx1NzY4NFx1OTRGRVx1NjNBNSdcclxuICAgIF0sXHJcbiAgICBiYWNrVG9Ib21lOiAnXHU4RkQ0XHU1NkRFXHU5OTk2XHU5ODc1JyxcclxuICAgIG5hdmJhcjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1x1NjMwN1x1NTM1NycsXHJcbiAgICAgICAgbGluazogJy8nXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnXHU3RUM0XHU0RUY2JyxcclxuICAgICAgICBsaW5rOiAnL2NvbXBvbmVudHMvbWVzc2FnZS5tZCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdcdTRFM0JcdTk4OTgnLFxyXG4gICAgICAgIGxpbms6ICcvZm9vLydcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIHNpZGViYXI6IFtcclxuICAgICAgLy8gU2lkZWJhckl0ZW1cclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICdCYXNpYyBcdTU3RkFcdTc4NDBcdTdFQzRcdTRFRjYnLFxyXG4gICAgICAgIGNvbGxhcHNpYmxlOiBmYWxzZSxcclxuICAgICAgICBjaGlsZHJlbjogWydidXR0b24nLCAnbWVzc2FnZSddXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICBsb2NhbGVzOiB7XHJcbiAgICAgICcvJzoge1xyXG4gICAgICAgIHNlbGVjdExhbmd1YWdlTmFtZTogJ1x1N0I4MFx1NEY1M1x1NEUyRFx1NjU4NydcclxuICAgICAgfSxcclxuICAgICAgJy91cy8nOiB7XHJcbiAgICAgICAgc2VsZWN0TGFuZ3VhZ2VOYW1lOiAnRW5nbGlzaCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pLFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIGRlbW9ibG9ja1BsdWdpbih7XHJcbiAgICAgIGN1c3RvbUNsYXNzOiAnZGVtb2Jsb2NrLWN1c3RvbScsXHJcbiAgICAgIHRoZW1lOiAnZ2l0aHViLWxpZ2h0JyxcclxuICAgICAgY3NzUHJlcHJvY2Vzc29yOiAnc2NzcycsXHJcbiAgICAgIHNjcmlwdFJlcGxhY2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2VhcmNoVmFsdWU6IC9jb25zdCAoeyBkZWZpbmVDb21wb25lbnQgYXMgX2RlZmluZUNvbXBvbmVudCB9KSA9IFZ1ZS9nLFxyXG4gICAgICAgICAgcmVwbGFjZVZhbHVlOiAnY29uc3QgeyBkZWZpbmVDb21wb25lbnQ6IF9kZWZpbmVDb21wb25lbnQgfSA9IFZ1ZSdcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pXHJcbiAgXVxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsa0JBQWtCLG9CQUFvQjtBQUUvQyxPQUFPLHFCQUFzQjtBQUU3QixJQUFPLGlCQUFRLGlCQUFpQjtBQUFBLEVBQzlCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLFNBQVM7QUFBQSxJQUNQLEtBQUs7QUFBQSxNQUNILE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU8sYUFBYTtBQUFBLElBQ2xCLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxJQUNkLGlCQUFpQjtBQUFBLElBQ2pCLGNBQWM7QUFBQSxJQUNkLGFBQWE7QUFBQSxJQUNiLGlCQUFpQjtBQUFBLElBQ2pCLGNBQWM7QUFBQSxJQUNkLGtCQUFrQjtBQUFBLElBQ2xCLFVBQVU7QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsWUFBWTtBQUFBLElBQ1osUUFBUTtBQUFBLE1BQ047QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUVQO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixVQUFVLENBQUMsVUFBVSxTQUFTO0FBQUEsTUFDaEM7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxLQUFLO0FBQUEsUUFDSCxvQkFBb0I7QUFBQSxNQUN0QjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sb0JBQW9CO0FBQUEsTUFDdEI7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBQUEsRUFDRCxTQUFTO0FBQUEsSUFDUCxnQkFBZ0I7QUFBQSxNQUNkLGFBQWE7QUFBQSxNQUNiLE9BQU87QUFBQSxNQUNQLGlCQUFpQjtBQUFBLE1BQ2pCLGdCQUFnQjtBQUFBLFFBQ2Q7QUFBQSxVQUNFLGFBQWE7QUFBQSxVQUNiLGNBQWM7QUFBQSxRQUNoQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
