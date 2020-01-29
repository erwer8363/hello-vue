#!/usr/bin/env bash
#author ever

git pull
git add .
echo $1
git commit -m $1
git push
