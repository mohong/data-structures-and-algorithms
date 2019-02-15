#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

cd ..
# 生成静态文件
vuepress build data-structures-and-algorithms

cd -

cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'


# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:mohong/data-structures-and-algorithms.git master:gh-pages

cd -