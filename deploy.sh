#!/usr/bin/env sh

# abort on errors当发生错误时中止脚本
set -e

# build构建
npm run build

# 创建并切换到gh-pages分支
# git checkout -b gh-pages

# 切换到gh-pages分支
git checkout gh-pages

# 强制添加dist文件夹，加-f因为dist目录不在版本控制里
git add -f dist

# 提交到本地暂存区
git commit -m "deploy"

# 从子目录push到远程仓库
git subtree push --prefix dist origin gh-pages
