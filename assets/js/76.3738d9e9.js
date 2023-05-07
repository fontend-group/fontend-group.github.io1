(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{486:function(s,t,a){"use strict";a.r(t);var n=a(62),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"面试官-你在react项目中是如何使用redux的-项目结构是如何划分的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官-你在react项目中是如何使用redux的-项目结构是如何划分的"}},[s._v("#")]),s._v(" 面试官：你在React项目中是如何使用Redux的? 项目结构是如何划分的？")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/31a4aff0-e7dc-11eb-ab90-d9ae814b240d.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"一、背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、背景"}},[s._v("#")]),s._v(" 一、背景")]),s._v(" "),a("p",[s._v("在前面文章了解中，我们了解到"),a("code",[s._v("redux")]),s._v("是用于数据状态管理，而"),a("code",[s._v("react")]),s._v("是一个视图层面的库")]),s._v(" "),a("p",[s._v("如果将两者连接在一起，可以使用官方推荐"),a("code",[s._v("react-redux")]),s._v("库，其具有高效且灵活的特性")]),s._v(" "),a("p",[a("code",[s._v("react-redux")]),s._v("将组件分成：")]),s._v(" "),a("ul",[a("li",[s._v("容器组件：存在逻辑处理")]),s._v(" "),a("li",[s._v("UI 组件：只负责现显示和交互，内部不处理逻辑，状态由外部控制")])]),s._v(" "),a("p",[s._v("通过"),a("code",[s._v("redux")]),s._v("将整个应用状态存储到"),a("code",[s._v("store")]),s._v("中，组件可以派发"),a("code",[s._v("dispatch")]),s._v("行为"),a("code",[s._v("action")]),s._v("给"),a("code",[s._v("store")])]),s._v(" "),a("p",[s._v("其他组件通过订阅"),a("code",[s._v("store")]),s._v("中的状态"),a("code",[s._v("state")]),s._v("来更新自身的视图")]),s._v(" "),a("h2",{attrs:{id:"二、如何做"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、如何做"}},[s._v("#")]),s._v(" 二、如何做")]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("react-redux")]),s._v("分成了两大核心：")]),s._v(" "),a("ul",[a("li",[s._v("Provider")]),s._v(" "),a("li",[s._v("connection")])]),s._v(" "),a("h3",{attrs:{id:"provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider"}},[s._v("#")]),s._v(" Provider")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("redux")]),s._v("中存在一个"),a("code",[s._v("store")]),s._v("用于存储"),a("code",[s._v("state")]),s._v("，如果将这个"),a("code",[s._v("store")]),s._v("存放在顶层元素中，其他组件都被包裹在顶层元素之上")]),s._v(" "),a("p",[s._v("那么所有的组件都能够受到"),a("code",[s._v("redux")]),s._v("的控制，都能够获取到"),a("code",[s._v("redux")]),s._v("中的数据")]),s._v(" "),a("p",[s._v("使用方式如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Provider store "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("App "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Provider"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"connection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connection"}},[s._v("#")]),s._v(" connection")]),s._v(" "),a("p",[a("code",[s._v("connect")]),s._v("方法将"),a("code",[s._v("store")]),s._v("上的"),a("code",[s._v("getState")]),s._v("和 "),a("code",[s._v("dispatch")]),s._v("包装成组件的"),a("code",[s._v("props")])]),s._v(" "),a("p",[s._v("导入"),a("code",[s._v("conect")]),s._v("如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" connect "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"react-redux"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("用法如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mapStateToProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mapDispatchToProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("MyComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("可以传递两个参数：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("mapStateToProps")])]),s._v(" "),a("li",[a("p",[s._v("mapDispatchToProps")])])]),s._v(" "),a("h3",{attrs:{id:"mapstatetoprops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapstatetoprops"}},[s._v("#")]),s._v(" mapStateToProps")]),s._v(" "),a("p",[s._v("把"),a("code",[s._v("redux")]),s._v("中的数据映射到"),a("code",[s._v("react")]),s._v("中的"),a("code",[s._v("props")]),s._v("中去")]),s._v(" "),a("p",[s._v("如下：")]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("mapStateToProps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("state")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// prop : state.xxx  | 意思是将state中的某个数据映射到props中")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bar\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("组件内部就能够通过"),a("code",[s._v("props")]),s._v("获取到"),a("code",[s._v("store")]),s._v("中的数据")]),s._v(" "),a("div",{staticClass:"language-cons line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Foo extends Component {\n    constructor(props){\n        super(props);\n    }\n    render(){\n        return(\n         // 这样子渲染的其实就是state.bar的数据了\n            <div>this.props.foo</div>\n        )\n    }\n}\nFoo = connect()(Foo)\nexport default Foo\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"mapdispatchtoprops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapdispatchtoprops"}},[s._v("#")]),s._v(" mapDispatchToProps")]),s._v(" "),a("p",[s._v("将"),a("code",[s._v("redux")]),s._v("中的"),a("code",[s._v("dispatch")]),s._v("映射到组件内部的"),a("code",[s._v("props")]),s._v("中")]),s._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("mapDispatchToProps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认传递参数就是dispatch")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onClick")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dispatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'increatment'")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Foo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Component")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("props")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n         \n             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("button onClick "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("onClick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("点击increase"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nFoo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" Foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),a("p",[s._v("整体流程图大致如下所示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://static.vue-js.com/3e47db10-e7dc-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"三、项目结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、项目结构"}},[s._v("#")]),s._v(" 三、项目结构")]),s._v(" "),a("p",[s._v("可以根据项目具体情况进行选择，以下列出两种常见的组织结构")]),s._v(" "),a("h4",{attrs:{id:"按角色组织-mvc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按角色组织-mvc"}},[s._v("#")]),s._v(" 按角色组织（MVC）")]),s._v(" "),a("p",[s._v("角色如下：")]),s._v(" "),a("ul",[a("li",[s._v("reducers")]),s._v(" "),a("li",[s._v("actions")]),s._v(" "),a("li",[s._v("components")]),s._v(" "),a("li",[s._v("containers")])]),s._v(" "),a("p",[s._v("参考如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("reducers"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n  todoReducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  filterReducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\nactions"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n  todoAction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  filterActions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\ncomponents"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n  todoList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  todoItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  filter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\ncontainers"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n  todoListContainer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  todoItemContainer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  filterContainer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h4",{attrs:{id:"按功能组织"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按功能组织"}},[s._v("#")]),s._v(" 按功能组织")]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("redux")]),s._v("使用功能组织项目，也就是把完成同一应用功能的代码放在一个目录下，一个应用功能包含多个角色的代码")]),s._v(" "),a("p",[a("code",[s._v("Redux")]),s._v("中，不同的角色就是"),a("code",[s._v("reducer")]),s._v("、"),a("code",[s._v("actions")]),s._v("和视图，而应用功能对应的就是用户界面的交互模块")]),s._v(" "),a("p",[s._v("参考如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("todoList"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n  actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  actionTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  reducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  views"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n    components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    containers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\nfilter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n  actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  actionTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  reducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n  views"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n    components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n    container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("每个功能模块对应一个目录，每个目录下包含同样的角色文件：")]),s._v(" "),a("ul",[a("li",[s._v("actionTypes.js 定义action类型")]),s._v(" "),a("li",[s._v("actions.js 定义action构造函数")]),s._v(" "),a("li",[s._v("reducer.js  定义这个功能模块如果响应actions.js定义的动作")]),s._v(" "),a("li",[s._v("views 包含功能模块中所有的React组件，包括展示组件和容器组件")]),s._v(" "),a("li",[s._v("index.js 把所有的角色导入，统一导出")])]),s._v(" "),a("p",[s._v("其中"),a("code",[s._v("index")]),s._v("模块用于导出对外的接口")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" actions "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./actions.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" reducer "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./reducer.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" view "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./views/container.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" view "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("导入方法如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" actions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" view "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" TodoList "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./xxxx'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),a("ul",[a("li",[s._v("https://www.redux.org.cn/docs/basics/UsageWithReact.html")]),s._v(" "),a("li",[s._v("https://segmentfault.com/a/1190000010384268")])])])}),[],!1,null,null,null);t.default=e.exports}}]);