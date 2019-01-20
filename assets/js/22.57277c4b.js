(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{262:function(t,a,n){"use strict";n.r(a);var s=n(0),e=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("p",[t._v("总结一些 Node 的学习笔记。。。\n")]),t._v(" "),n("h2",{attrs:{id:"_1-请求头中content-type的常用类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-请求头中content-type的常用类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 请求头中Content-Type的常用类型")]),t._v(" "),n("blockquote",[n("p",[t._v("在http协议消息头中，使用Content-Type来表示具体请求中的媒体类型信息。")])]),t._v(" "),n("h3",{attrs:{id:"常见的媒体格式类型如下："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常见的媒体格式类型如下：","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见的媒体格式类型如下：")]),t._v(" "),n("ul",[n("li",[t._v("text/html  ( HTML格式)")]),t._v(" "),n("li",[t._v("text/plain  (纯文本格式  )")]),t._v(" "),n("li",[t._v("text/xml  (  XML格式)")]),t._v(" "),n("li",[t._v("image/gif  (gif图片格式)")]),t._v(" "),n("li",[t._v("image/jpeg  (jpg图片格式)")]),t._v(" "),n("li",[t._v("image/png (png图片格式)")])]),t._v(" "),n("h3",{attrs:{id:"以application开头的媒体格式类型："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#以application开头的媒体格式类型：","aria-hidden":"true"}},[t._v("#")]),t._v(" 以application开头的媒体格式类型：")]),t._v(" "),n("ul",[n("li",[t._v("application/xhtml+xml      (XHTML格式)")]),t._v(" "),n("li",[t._v("application/xml            (XML数据格式)")]),t._v(" "),n("li",[t._v("application/atom+xml       (Atom XML聚合格式)")]),t._v(" "),n("li",[t._v("application/json           (JSON数据格式)")]),t._v(" "),n("li",[t._v("application/pdf            (pdf格式)")]),t._v(" "),n("li",[t._v("application/msword         (Word文档格式)")]),t._v(" "),n("li",[t._v("application/octet-stream   （二进制流数据如常见的文件下载）")]),t._v(" "),n("li",[t._v("application/x-www-form-urlencoded  （表单默认的提交数据的格式）")])]),t._v(" "),n("h3",{attrs:{id:"另外一种常见的媒体格式是上传文件之时使用的："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#另外一种常见的媒体格式是上传文件之时使用的：","aria-hidden":"true"}},[t._v("#")]),t._v(" 另外一种常见的媒体格式是上传文件之时使用的：")]),t._v(" "),n("ul",[n("li",[t._v("multipart/form-data  (需要在表单中进行文件上传时，就需要使用该格式)")])]),t._v(" "),n("h2",{attrs:{id:"_2-创建子进程的方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建子进程的方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 创建子进程的方法")]),t._v(" "),n("blockquote",[n("p",[t._v("child_process模块给予node可以随意创建子进程的能力，它提供了四个方法用于创建子进程。")])]),t._v(" "),n("ul",[n("li",[t._v("spawn() : 启动一个子进程来执行命令；")]),t._v(" "),n("li",[t._v("exec() : 启动一个子进程来执行命令，与spawn不同的是其接口不同，它有一个回调函数获取子进程的状况；")]),t._v(" "),n("li",[t._v("execFile() : 启动一个子进程来执行可执行文件；")]),t._v(" "),n("li",[t._v("fork() : 与spawn类似，不同点在于它创建的子进程只需要指定要执行的JavaScript文件模块即可；")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cp "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'child_process'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("spawn")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'node'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'work.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("exec")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'node work.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stdout"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stderr"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// doSomeThing")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("execFile")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'work.js'")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stdout"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stderr"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// doSomeThing")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("fork")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'./work.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("差异：")]),t._v(" "),n("p",[t._v("spawn与exec/execFile不同的是，后两者创建时可以指定timeout属性设置超时时间，一旦创建的进程运行超过设定时间将会被杀死；")]),t._v(" "),n("p",[t._v("exec与execFile不同的是，exec适合执行已有的指令，execFile适合执行文件；")]),t._v(" "),n("p",[t._v("这里的可执行文件是指可以直接执行的文件，如果是JavaScript文件通过execFile()运行时，它的首行内容必须添加如下代码：\n"),n("strong",[t._v("#!/usr/bin/env node")])])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("回调")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("进程类型")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("执行类型")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("可设置超时")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("spawn")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("任意")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("命令")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("❌")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("exec")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("任意")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("命令")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("execFile")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("任意")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("可执行文件")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✅")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("spawn")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Node")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("JavaScript文件")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("❌")])])])]),t._v(" "),n("h2",{attrs:{id:"_3-写入文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-写入文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 写入文件")]),t._v(" "),n("blockquote",[n("p",[t._v("fs.writeFile(file, data[, options], callback)")])]),t._v(" "),n("p",[t._v("参数说明：")]),t._v(" "),n("ul",[n("li",[t._v("file - 文件名或文件描述符")]),t._v(" "),n("li",[t._v("data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(流) 对象")]),t._v(" "),n("li",[t._v("options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'，*如果是一个字符串，则它指定了字符编码")]),t._v(" "),n("li",[t._v("callback - 回调函数")]),t._v(" "),n("li",[t._v("以追加模式往README.me写入字符串Hello Node.js")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("fs"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("writeFile")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'README.md'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Hello Node.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("flag"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'a+'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" err\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'It\\'s saved!'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("这里我们介绍下flags ：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("Flag")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("r")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("以读取模式打开文件。如果文件不存在抛出异常。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("r+")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("以读写模式打开文件。如果文件不存在抛出异常。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("rs")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("以同步的方式读取文件。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("rs+")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("以同步的方式读取和写入文件。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("w")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("以写入模式打开文件，如果文件不存在则创建。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("wx")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("类似 'w'，但是如果文件路径存在，则文件写入失败。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("w+")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("以读写模式打开文件，如果文件不存在则创建。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("wx+")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("类似 'w+'， 但是如果文件路径存在，则文件读写失败。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("a")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("以追加模式打开文件，如果文件不存在则创建。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("ax")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("类似 'a'， 但是如果文件路径存在，则文件追加失败。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("a+")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("以读取追加模式打开文件，如果文件不存在则创建。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("ax+")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。")])])])])])}],!1,null,null,null);e.options.__file="node-study.md";a.default=e.exports}}]);