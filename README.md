# geektime-column-oh-my-kit

「哦我的工具箱（`oh-my-tool`）」项目基于[MIT 协议](./LICENSE)开源，是一款集（duī）成（qì）了大量生产力工具的桌面 Web 应用软件，可以通过便捷的导航，轻松访问到趁手的、体验一致的工具。
### 如何使用

开发环境需要 Node.js 16 LTS 版本。

1. 克隆项目仓库到本地 `git clone https://github.com/power17/oh-my-tool.git`；
2. 进入项目目录 `cd oh-my-tool.git`；
3. 安装 NPM 依赖 `pnpm install`；
4. 运行 NPM 脚本 `npm run dev`，浏览器会自动打开 [http://127.0.0.1:5173](http://127.0.0.1:5173/)，展示应用。

#### 软件架构

开发中

### 参与贡献

#### 1. 提交 Bug 或 Feature Request

欢迎指出你在应用功能或技术层面发现的 Bug，也欢迎提出你希望应用加入的功能。

[【+ Issue】](https://github.com/power17/oh-my-tool/issues)

#### 2. 贡献代码

步骤：

1. Fork 本仓库；
2. 基于最新的`main`分支，新建自己的`feat/xxx_yyy`分支；
3. 确认新加入的代码在本地可以正常运行，提交代码；
4. 新建拉取请求：[【+ Pull Request】](https://github.com/power17/oh-my-tool/pulls/new)；
5. 根据 PR 中的评审意见，发起讨论并对代码进行必要的调整；
6. PR 被合并到`main`分支后，会被部署在[Gitee Pages](https://github.com/power17/oh-my-tool) --todo。


对代码的一些建议：

- React 代码优先使用函数组件和 Hooks，减少类组件使用；
- 目前项目同时支持 TS 和 JS，选用自己熟悉的语言即可；
- 提倡保持代码简洁，变量名清晰，避免面条代码；
- 无需纠结代码格式，交给 ESLint 和 Prettier 就好自动格式化就好；
- 尽量基于项目现有的依赖包进行开发，避免额外引入第三方库；
- 尽量避免复制粘贴第三方代码，如确实需要请标明出处；
- 虽然目前还不统计测试覆盖率，但非常欢迎加入单元测试和 E2E 测试。


如果在 Issue 或 PR 中包含违规内容，项目维护者有权代为修改或删除。
