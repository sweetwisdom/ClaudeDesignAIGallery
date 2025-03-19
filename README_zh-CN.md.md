
# 🎨 Claude - AI 驱动的 UI/UX 设计工坊



> 本项目基于 **Claude 3.7/3.5** 与 **Cursor** 工具生成高保真 UI 代码，探索 AI 辅助设计的工业化实践

![image-20250319171739076](.imgs/image-20250319171739076.png)

## 🌟 核心价值

### 🚀 产品特性
- **AI 提效亮点**
  - 自然语言驱动设计迭代
  - Tailwind CSS 原子化样式体系
  - Figma/Pixso 无缝衔接工作流

## 🛠 技术全景
### 技术栈矩阵
| 类别         | 技术组件                          |
|--------------|---------------------------------|
| **AI 引擎**   | Claude 3.7 / Claude 3.5        |
| **开发工具**  | Cursor / Cline/Trae              |
| **前端框架**  | HTML5 + Tailwind CSS            |
| **设计协作**  | Figma (HTML 插件) / Pixso      |

## 🎯 生成案例
| 案例名称 | 生成效果 | 名称 |
|----------|--------|---------|
| project01 | <img src=".imgs/image-20250319165826816.png" alt="image-20250319165826816" style="width: 200px;" /> | **音乐类app**  |
| project02 | <img src=".imgs/image-20250319165957779.png" alt="image-20250319165957779" style="width:200px;" />                                                             | **合同类app**  |
| project03 | <img src=".imgs/image-20250319170040377.png" alt="image-20250319170040377" style="width:200px;" /> | **音乐类app**  |
| project04 | <img src=".imgs/image-20250319170258840.png" alt="image-20250319170258840" style="width: 200px;" /> | **合同类app**  |
| project05 | <img src=".imgs/image-20250319170352321.png" alt="image-20250319170352321" style="width:200px;" /> | **健康类app**  |



### 设计资产导入
```tip
💡 生成结果可通过 Figma 的 HTML 插件直接导入，建议：
1. 在 Figma 中创建 375x812 画板（iPhone 15 Pro 尺寸）
2. 使用「Convert to Path」处理文字图层
3. 应用「Glassmorphism」社区插件增强质感
```

## 🤖 prompt
### prompt
```html
你是一位资深全栈工程师，参考 ui_ux_design 设计一个【闲置app】，模拟产品经理提出需求和信息架构，请自己构思好功能需求和界面，然后设计 UI/UX。

- 产品界面规划：作为产品经理，定义关键界面，确保信息架构合理。
- 用户体验分析：先分析这个 App 的主要功能和用户需求，确定核心交互逻辑。
- 高保真 UI 设计：作为 UI 设计师，设计贴近真实 iOS/Android 设计规范的界面，使用现代化的 UI 元素，使其具有良好的视觉体验。
- HTML 原型实现：使用 HTML + Tailwind CSS（或 Bootstrap）生成所有原型界面，并使用 FontAwesome（或其他开源 UI 组件）让界面更加精美、接近真实的 App 设计。拆分代码文件，保持结构清晰（-注意 list-item 是Tailwind 的属性，避开这个className）。
- 每个界面应作为独立的 HTML 文件存放，例如 home.html、profile.html、settings.html 等。
- index.html 作为主入口，不直接写入所有界面的 HTML 代码，而是使用 iframe 的方式嵌入这些 HTML 片段，并将所有页面直接平铺展示在 index 页面中，而不是跳转链接。
- 真实感增强：界面尺寸应模拟 iPhone 15 Pro，并让界面圆角化，使其更像真实的手机界面。  
- 使用真实的 UI 图片，而非占位符图片（可从 Unsplash、Pexels、Apple 官方 UI 资源中选择）。  
- 添加顶部状态栏（模拟 iOS 状态栏），并包含 App 导航栏（类似 iOS 底部 Tab Bar）。
- 请按照以上要求生成完整的 HTML 代码，并确保其可用于实际开发。
- 可以滑动的页面不要显示滚动条
- 如果单个页面代码量大，可以分次写入
- 要高级有质感（运用玻璃拟态等视觉效果），遵守设计规范，注重UI细节
- 使用 sequentialthinking 逐步分析
```




## 📜 许可协议
本项目采用 [MIT License](LICENSE)
