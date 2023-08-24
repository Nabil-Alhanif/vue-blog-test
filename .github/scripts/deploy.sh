#!/usr/bin/env sh
# abort on errors
set -e

git checkout --orphan gh-pages

echo "Building started..."
yarn build

echo "Preparing commit"
git config --local user.email "github-actions[bot]@users.noreply.github.com"
git config --local user.name "github-actions[bot]"
git --work-tree dist add --all
git --work-tree dist commit -m "Deploy"

echo "Pushing to gh-pages..."
git push origin HEAD:gh-pages --force
rm -r dist
git checkout -f master

echo "Successfully deployed"
