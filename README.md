# Xiaoxi GitHub Image Host Broccoli V2.0

项目现在已经整理为三段式结构，方便分别部署、维护和后续扩展：

- `frontend`
  前端主程序，基于 React + Vite + shadcn/ui，可继续单独部署为网页应用。
- `backend`
  可选的 Python 单文件远程服务，负责图片元数据同步、开放 API、业务 API Key 和白名单管理。
- `desktop`
  桌面版占位目录，后续可以接入 Tauri 或其他桌面壳方案。

## 目录说明

### frontend

前端主项目目录。

开发：

```bash
cd frontend
npm install
npm run dev
```

构建：

```bash
cd frontend
npm run build
```

### backend

远程服务目录。

启动：

```bash
cd backend
python image_center_server.py
```

首次运行后，会在 `backend/data/` 下生成：

- `config.json`
- `app.db`

### desktop

桌面版打包占位目录，目前还没有正式接入。

## 说明

- 前端依然可以独立运行，不依赖后端
- 后端只是可选增强能力
- 当前仓库结构已经为后续桌面化和多端维护做好拆分
