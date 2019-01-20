(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{263:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p",[t._v("Node中常用的一些方法。\n")]),t._v(" "),a("h2",{attrs:{id:"_1-查看内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看内存","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 查看内存")]),t._v(" "),a("ul",[a("li",[a("ol",[a("li",[t._v("查看进程的内存占用: "),a("strong",[t._v("process.memoryUsage()")])])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("$ node\n"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("memoryUsage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" rss"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("23355392")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        "),a("span",{attrs:{class:"token comment"}},[t._v("// 进程中的常驻内存")]),t._v("\n  heapTotal"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("9682944")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{attrs:{class:"token comment"}},[t._v("// 堆中总共申请的内存")]),t._v("\n  heapUsed"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5911720")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v("// 目前堆中使用的内存")]),t._v("\n  external"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("8840")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("      "),a("span",{attrs:{class:"token comment"}},[t._v("// 代表V8管理的，绑定到Javascript的C++对象的内存使用情况")]),t._v("\n")])])]),a("ul",[a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("查看系统的内存占用: "),a("strong",[t._v("os.totalmem()"),a("strong",[t._v("和")]),t._v("os.freemem()")])])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("$ node\n"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" os"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("totalmem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),a("span",{attrs:{class:"token comment"}},[t._v("// 系统的总内存")]),t._v("\n"),a("span",{attrs:{class:"token number"}},[t._v("8589934592")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" os"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("freemem")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),a("span",{attrs:{class:"token comment"}},[t._v("// 系统的闲置内存")]),t._v("\n"),a("span",{attrs:{class:"token number"}},[t._v("209539072")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-curl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-curl","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. curl")]),t._v(" "),a("blockquote",[a("p",[t._v("在Linux中curl是一个利用URL规则在命令行下工作的文件传输工具，可以说是一款很强大的http命令行工具。它支持文件的上传和下载，是综合传输工具，但按传统，习惯称url为下载工具。")])]),t._v(" "),a("ul",[a("li",[a("ol",[a("li",[t._v("基本语法")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("curl "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("option"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("url"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("ul",[a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("常见参数：")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token constant"}},[t._v("A")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("user"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("agent "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("string"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("        "),a("span",{attrs:{class:"token comment"}},[t._v("// 设置用户代理发送给服务器")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("b"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("cookie "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("string"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("file"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// cookie字符串或文件读取位置")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("c"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("cookie"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("jar "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("file"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("          "),a("span",{attrs:{class:"token comment"}},[t._v("// 操作结束后把cookie写入到这个文件中")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token constant"}},[t._v("C")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token keyword"}},[t._v("continue")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("at "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("offset"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("       "),a("span",{attrs:{class:"token comment"}},[t._v("// 断点续转")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token constant"}},[t._v("D")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("dump"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("header "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("file"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("         "),a("span",{attrs:{class:"token comment"}},[t._v("// 把header信息写入到该文件中")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("e"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("referer                    "),a("span",{attrs:{class:"token comment"}},[t._v("// 来源网址")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("f"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("fail                       "),a("span",{attrs:{class:"token comment"}},[t._v("// 连接失败时不显示http错误")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("o"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("output                     "),a("span",{attrs:{class:"token comment"}},[t._v("// 把输出写到该文件中")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token constant"}},[t._v("O")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("remote"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("name                "),a("span",{attrs:{class:"token comment"}},[t._v("// 把输出写到该文件中，保留远程文件的文件名")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("r"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("range "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("range"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("              "),a("span",{attrs:{class:"token comment"}},[t._v("// 检索来自HTTP/1.1或FTP服务器字节范围")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("s"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("silent                     "),a("span",{attrs:{class:"token comment"}},[t._v("// 静音模式。不输出任何东西")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token constant"}},[t._v("T")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("upload"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("file "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("file"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("         "),a("span",{attrs:{class:"token comment"}},[t._v("// 上传文件")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("u"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("user "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("user"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("password"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("     "),a("span",{attrs:{class:"token comment"}},[t._v("// 设置服务器的用户和密码")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("w"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("write"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("out "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("format"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("         "),a("span",{attrs:{class:"token comment"}},[t._v("// 什么输出完成后")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("x"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("proxy "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("host"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("port"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("        "),a("span",{attrs:{class:"token comment"}},[t._v("// 在给定的端口上使用HTTP代理")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("#"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("progress"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("bar               "),a("span",{attrs:{class:"token comment"}},[t._v("// 进度条显示当前的传送状态")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-npm包的淘宝源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-npm包的淘宝源","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. npm包的淘宝源")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm install express "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),t._v("registry"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("https"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("registry"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("npm"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org\n")])])])])}],!1,null,null,null);o.options.__file="node-common-methods.md";s.default=o.exports}}]);