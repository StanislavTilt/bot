#!/bin/bash

git add .
git commit -m"$1 $(git status -s)"
git push origin