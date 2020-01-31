#!/usr/bin/env bash
#author ever

git pull
git add .
if [ -z $1  ]; then
  echo "输入不能为空"
else
  echo $1
  git commit -m $1
  git push
fi

