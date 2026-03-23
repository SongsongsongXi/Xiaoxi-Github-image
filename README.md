# 小曦 GitHub 图床 Broccoli V2.0

一个面向个人与小团队使用的 GitHub 图床项目，支持纯前端部署、本地可选远程服务，以及桌面版前端壳。项目围绕“前端优先、服务端可选、配置可迁移”来设计，适合用于博客写作、内容分发、截图托管和图片链接管理。

[小曦的园子](https://xiaoxi.ac.cn/) · [MIT License](./LICENSE)

## 项目特性

- 纯前端 GitHub 图床，直接调用 GitHub API 上传与管理文件
- 基于 `shadcn/ui` 的顶栏 + 侧边栏应用布局
- 支持仓库管理、上传目录、仓库级 CDN 配置
- 支持图片压缩、水印、命名规则、历史记录和最近操作
- 支持可选 Python 远程服务，用于元数据同步和开放 API
- 支持桌面版前端壳，桌面环境自动切换为本地 JSON 配置存储
- 前端 Web 部署继续使用 `localStorage`，保持现有部署方式不变

## 仓库结构

```text
.
├─ frontend/   Web 前端，React + Vite + shadcn/ui
├─ backend/    可选远程服务，Python + SQLite
├─ desktop/    Electron 桌面前端壳
├─ logo.png    项目标识
└─ README.md
```

## 功能概览

### 前端

- GitHub 仓库配置与验证
- 图片上传、删除、历史记录
- 当前仓库内容查看与分页
- 水印设置、压缩设置、命名规则
- 远程服务连接、业务 API Key 管理、开放 API 文档
- 设置导入 / 导出

### 远程服务

- 主管理密钥验证
- 业务 API Key 管理
- 远程图片元数据记录
- 开放 API 查询仓库与图片信息
- SQLite 持久化存储

### 桌面版

- 加载前端构建产物
- 使用 Electron 作为桌面壳
- 自动将配置保存到本地 `settings.json`
- 不影响前端原有 Web 部署


## 快速开始

### 1. 启动前端

```bash
cd frontend
npm install
npm run dev
```

生产构建：

```bash
cd frontend
npm run build
```

### 2. 启动远程服务

```bash
cd backend
python image_center_server.py
```

首次运行后，服务端会在 `backend/data/` 下生成自己的配置与数据库文件。


默认情况下：

- Web 前端使用浏览器 `localStorage`
- 桌面版使用本地 `settings.json`

## 配置存储说明

项目已经支持双模式配置持久化：

- Web 环境：自动使用浏览器 `localStorage`
- Desktop 环境：通过 Electron `preload` 桥接，自动写入本地 JSON 文件

这意味着你可以继续像普通前端项目一样部署 `frontend`，也可以把相同界面打包成桌面版，而不需要改业务逻辑。

## 开发说明

### 前端技术栈

- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React
- Sonner

### 后端技术栈

- Python
- SQLite

### 桌面版技术栈

- Electron
- Electron Builder

## 开放 API 与远程服务

远程服务是可选模块，不启用也不会影响前端主链路。

启用后可获得：

- 图片元数据同步
- 业务 API Key 管理
- 开放 API 查询
- 远程图片记录管理

接口文档目前内置在前端“远程服务”页面中，通过右上角文档按钮即可查看。


## 许可证

本项目基于 [MIT License](./LICENSE) 开源。

## 版权信息

- 项目名称：小曦 GitHub 图床 Broccoli V2.0
- 版权所有：小曦的园子
- 官方网站：[https://xiaoxi.ac.cn/](https://xiaoxi.ac.cn/)
