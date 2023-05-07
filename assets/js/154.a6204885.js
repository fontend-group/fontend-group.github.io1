(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{563:function(t,v,_){"use strict";_.r(v);var i=_(62),a=Object(i.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"面试官-说说git常用的命令有哪些"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说git常用的命令有哪些"}},[t._v("#")]),t._v(" 面试官：说说Git常用的命令有哪些？")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/f66b3290-f7af-11eb-bc6f-3f06e1491664.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"一、前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),_("p",[_("code",[t._v("git")]),t._v("的操作可以通过命令的形式如执行，日常使用就如下图6个命令即可")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/fe150520-f7af-11eb-991d-334fd31f0201.png",alt:""}})]),t._v(" "),_("p",[t._v("实际上，如果想要熟练使用，超过60多个命令需要了解，下面则介绍下常见的的"),_("code",[t._v("git")]),t._v("命令")]),t._v(" "),_("h2",{attrs:{id:"二、有哪些"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、有哪些"}},[t._v("#")]),t._v(" 二、有哪些")]),t._v(" "),_("h2",{attrs:{id:"配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),_("p",[_("code",[t._v("Git")]),t._v("自带一个 "),_("code",[t._v("git config")]),t._v(" 的工具来帮助设置控制 "),_("code",[t._v("Git")]),t._v("外观和行为的配置变量，在我们安装完"),_("code",[t._v("git")]),t._v("之后，第一件事就是设置你的用户名和邮件地址")]),t._v(" "),_("p",[t._v("后续每一个提交都会使用这些信息，它们会写入到你的每一次提交中，不可更改")]),t._v(" "),_("p",[t._v("设置提交代码时的用户信息命令如下：")]),t._v(" "),_("ul",[_("li",[t._v('git config [--global] user.name "[name]"')]),t._v(" "),_("li",[t._v('git config [--global] user.email "[email address]"')])]),t._v(" "),_("h3",{attrs:{id:"启动"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[t._v("#")]),t._v(" 启动")]),t._v(" "),_("p",[t._v("一个"),_("code",[t._v("git")]),t._v("项目的初始有两个途径，分别是：")]),t._v(" "),_("ul",[_("li",[t._v("git init [project-name]：创建或在当前目录初始化一个git代码库")]),t._v(" "),_("li",[t._v("git clone url：下载一个项目和它的整个代码历史")])]),t._v(" "),_("h3",{attrs:{id:"日常基本操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#日常基本操作"}},[t._v("#")]),t._v(" 日常基本操作")]),t._v(" "),_("p",[t._v("在日常工作中，代码常用的基本操作如下：")]),t._v(" "),_("ul",[_("li",[t._v("git init 初始化仓库，默认为 master 分支")]),t._v(" "),_("li",[t._v("git add . 提交全部文件修改到缓存区")]),t._v(" "),_("li",[t._v("git add <具体某个文件路径+全名> 提交某些文件到缓存区")]),t._v(" "),_("li",[t._v("git diff  查看当前代码 add后，会 add 哪些内容")]),t._v(" "),_("li",[t._v("git diff --staged查看现在 commit 提交后，会提交哪些内容")]),t._v(" "),_("li",[t._v("git status 查看当前分支状态")]),t._v(" "),_("li",[t._v("git pull <远程仓库名> <远程分支名> 拉取远程仓库的分支与本地当前分支合并")]),t._v(" "),_("li",[t._v("git pull <远程仓库名> <远程分支名>:<本地分支名> 拉取远程仓库的分支与本地某个分支合并")]),t._v(" "),_("li",[t._v('git commit -m "<注释>" 提交代码到本地仓库，并写提交注释')]),t._v(" "),_("li",[t._v("git commit -v 提交时显示所有diff信息")]),t._v(" "),_("li",[t._v("git commit --amend [file1] [file2] 重做上一次commit，并包括指定文件的新变化")])]),t._v(" "),_("p",[t._v("关于提交信息的格式，可以遵循以下的规则：")]),t._v(" "),_("ul",[_("li",[t._v("feat: 新特性，添加功能")]),t._v(" "),_("li",[t._v("fix: 修改 bug")]),t._v(" "),_("li",[t._v("refactor: 代码重构")]),t._v(" "),_("li",[t._v("docs: 文档修改")]),t._v(" "),_("li",[t._v("style: 代码格式修改, 注意不是 css 修改")]),t._v(" "),_("li",[t._v("test: 测试用例修改")]),t._v(" "),_("li",[t._v("chore: 其他修改, 比如构建流程, 依赖管理")])]),t._v(" "),_("h3",{attrs:{id:"分支操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分支操作"}},[t._v("#")]),t._v(" 分支操作")]),t._v(" "),_("ul",[_("li",[t._v("git branch 查看本地所有分支")]),t._v(" "),_("li",[t._v("git branch -r 查看远程所有分支")]),t._v(" "),_("li",[t._v("git branch -a 查看本地和远程所有分支")]),t._v(" "),_("li",[t._v("git merge <分支名> 合并分支")]),t._v(" "),_("li",[t._v("git merge --abort 合并分支出现冲突时，取消合并，一切回到合并前的状态")]),t._v(" "),_("li",[t._v("git branch <新分支名> 基于当前分支，新建一个分支")]),t._v(" "),_("li",[t._v("git checkout --orphan <新分支名> 新建一个空分支（会保留之前分支的所有文件）")]),t._v(" "),_("li",[t._v("git branch -D <分支名> 删除本地某个分支")]),t._v(" "),_("li",[t._v("git push <远程库名> :<分支名> 删除远程某个分支")]),t._v(" "),_("li",[t._v("git branch <新分支名称> <提交ID> 从提交历史恢复某个删掉的某个分支")]),t._v(" "),_("li",[t._v("git branch -m <原分支名> <新分支名> 分支更名")]),t._v(" "),_("li",[t._v("git checkout <分支名> 切换到本地某个分支")]),t._v(" "),_("li",[t._v("git checkout <远程库名>/<分支名> 切换到线上某个分支")]),t._v(" "),_("li",[t._v("git checkout -b <新分支名> 把基于当前分支新建分支，并切换为这个分支")])]),t._v(" "),_("h3",{attrs:{id:"远程同步"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#远程同步"}},[t._v("#")]),t._v(" 远程同步")]),t._v(" "),_("p",[t._v("远程操作常见的命令：")]),t._v(" "),_("ul",[_("li",[t._v("git fetch [remote] 下载远程仓库的所有变动")]),t._v(" "),_("li",[t._v("git remote -v 显示所有远程仓库")]),t._v(" "),_("li",[t._v("git pull [remote] [branch] 拉取远程仓库的分支与本地当前分支合并")]),t._v(" "),_("li",[t._v("git fetch 获取线上最新版信息记录，不合并")]),t._v(" "),_("li",[t._v("git push [remote] [branch] 上传本地指定分支到远程仓库")]),t._v(" "),_("li",[t._v("git push [remote] --force 强行推送当前分支到远程仓库，即使有冲突")]),t._v(" "),_("li",[t._v("git push [remote] --all 推送所有分支到远程仓库")])]),t._v(" "),_("h3",{attrs:{id:"撤销"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#撤销"}},[t._v("#")]),t._v(" 撤销")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("git checkout [file] 恢复暂存区的指定文件到工作区")])]),t._v(" "),_("li",[_("p",[t._v("git checkout [commit] [file]  恢复某个commit的指定文件到暂存区和工作区")])]),t._v(" "),_("li",[_("p",[t._v("git checkout . 恢复暂存区的所有文件到工作区")])]),t._v(" "),_("li",[_("p",[t._v("git reset [commit] 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变")])]),t._v(" "),_("li",[_("p",[t._v("git reset --hard 重置暂存区与工作区，与上一次commit保持一致")])]),t._v(" "),_("li",[_("p",[t._v("git reset [file] 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变")])]),t._v(" "),_("li",[_("p",[t._v("git revert [commit]  后者的所有变化都将被前者抵消，并且应用到当前分支")])])]),t._v(" "),_("blockquote",[_("p",[_("code",[t._v("reset")]),t._v("：真实硬性回滚，目标版本后面的提交记录全部丢失了")]),t._v(" "),_("p",[_("code",[t._v("revert")]),t._v("：同样回滚，这个回滚操作相当于一个提价，目标版本后面的提交记录也全部都有")])]),t._v(" "),_("h3",{attrs:{id:"存储操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#存储操作"}},[t._v("#")]),t._v(" 存储操作")]),t._v(" "),_("p",[t._v("你正在进行项目中某一部分的工作，里面的东西处于一个比较杂乱的状态，而你想转到其他分支上进行一些工作，但又不想提交这些杂乱的代码，这时候可以将代码进行存储")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("git stash 暂时将未提交的变化移除")])]),t._v(" "),_("li",[_("p",[t._v("git stash pop 取出储藏中最后存入的工作状态进行恢复，会删除储藏")])]),t._v(" "),_("li",[_("p",[t._v("git stash list 查看所有储藏中的工作")])]),t._v(" "),_("li",[_("p",[t._v("git stash apply <储藏的名称>  取出储藏中对应的工作状态进行恢复，不会删除储藏")])]),t._v(" "),_("li",[_("p",[t._v("git stash clear 清空所有储藏中的工作")])]),t._v(" "),_("li",[_("p",[t._v("git stash drop <储藏的名称>  删除对应的某个储藏")])])]),t._v(" "),_("h2",{attrs:{id:"三、总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、总结"}},[t._v("#")]),t._v(" 三、总结")]),t._v(" "),_("p",[_("code",[t._v("git")]),t._v("常用命令速查表如下所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/0a10f3c0-f7b0-11eb-991d-334fd31f0201.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"参考文献"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html")])]),t._v(" "),_("li",[_("p",[t._v("https://segmentfault.com/a/1190000017875714")])])])])}),[],!1,null,null,null);v.default=a.exports}}]);