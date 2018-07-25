(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{51:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"京东会员码小程序插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#京东会员码小程序插件","aria-hidden":"true"}},[t._v("#")]),t._v(" 京东会员码小程序插件")]),a("h3",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 描述")]),a("ul",[a("li",[t._v("小程序会员码插件是将CRM带有会员身份的二维码、条形码赋能到合作伙伴的小程序中，方便合作伙伴小程序端快速接入。")]),a("li",[t._v("帮助合作伙伴生成并显示安全的会员码（ 二维码和条形码 ）。")])]),a("h3",{attrs:{id:"功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能")]),a("ol",[a("li",[t._v("会员码展示\n"),a("ul",[a("li",[t._v("定时刷新")]),a("li",[t._v("二维码放大")]),a("li",[t._v("防截屏")]),a("li",[t._v("风控保障")]),a("li",[t._v("验证安全保障")])])]),a("li",[t._v("京东、微信免密支付展示")]),a("li",[t._v("微信免密支付开通")]),a("li",[t._v("支付设置")]),a("li",[t._v("会员码刷新")])]),a("h3",{attrs:{id:"项目结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 项目结构")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("jddjMemberCode\n├─┬ miniprogram //小程序目录，用于展示插件\n│ ├── app.js\n│ ├── app.json\n│ └─┬ pages\n│   ├─┬ index\n│   │ ├── index.js\n│   │ ├── index.json\n│   │ ├── index.wxml\n│   │ └── index.wxss\n├─┬ plugin //插件目录，包含插件的apis和插件的Components\n│ ├─┬ api\n│ │ └── data.js\n│ ├─┬ components\n│ │ └─┬ member\n│ │   ├── member.js\n│ │   ├── member.json\n│ │   ├── member.wxml\n│ │   └── member.wxss\n│ ├── index.js\n│ ├── plugin.json\n│ ├─┬ static\n│ │ └── jdpay-logo.png\n│ └─┬ utils //工具函数\n│   ├── barcode.js\n│   ├── qrcode.js\n│   └── utils.js\n└── project.config.json\n")])]),a("h3",{attrs:{id:"接入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接入","aria-hidden":"true"}},[t._v("#")]),t._v(" 接入")]),a("ol",[a("li",[t._v("在小程序后台搜索「京东支付会员码」并申请使用，通过后即可使用")])]),a("h3",{attrs:{id:"使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用方法")]),a("h4",{attrs:{id:"引入插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入插件","aria-hidden":"true"}},[t._v("#")]),t._v(" 引入插件")]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("//@version 根据要接入的版本填写\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"memberCode"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"version"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"1.0.0"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token property"}},[t._v('"provider"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"wxb************"')]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("使用自定义组件：")]),a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("//使用wx:if控制离开组件时销毁\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("memberCode")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[t._v("wx:")]),t._v("if")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ pluginStatus }}"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("memberCode")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("p",[t._v("使用小程序插件内api：")]),a("ul",[a("li",[t._v("定义回调函数")])]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/**\n**@params:\n**@name: options \n**@type: Object\n**/")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("jdpayPluginCallback")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" options "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//your code")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("//options格式：")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    code"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//0：使用webview打开指定链接 1：开通微信免密 2：用户未登录 3：返回上一页")]),t._v("\n    type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//0： 开通京东免密 2：支付设置 3：支付成功，仅当code为0 时\b使用")]),t._v("\n    url"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//要打开的页面url")]),t._v("\n    miniPayParam"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//开通微信免密所需数据")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("\b初始化插件api:")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// pt_key和sid为业务登录标识，根据自己业务选择使用，有且仅有一个")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// deviceId为设备号，必传")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// openid为小程序内风控所需字段，必传")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" params "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sid"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    deviceId"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    openId"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nplugin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("init")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" param"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" jdpayPluginCallback "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("小程序后台配置request合法域名")]),a("ol",[a("li",[t._v("开通京东免密支付的域名： https://mapi.jdpay.com/")]),a("li",[t._v("支付\b设置的域名： https://payxsign.jd.com/")])])])])}],!1,null,null,null);s.default=e.exports}}]);