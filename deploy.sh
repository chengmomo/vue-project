#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

#切换到gh-pages分支
git checkout gh-pages

#强制添加dist文件夹
git add -f dist

#提交到本地暂存区
git commit -m "deploy"

# 从子目录push到远程仓库
git subtree push --prefix dist origin gh-pages
