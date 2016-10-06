#!/usr/bin/env bash

npm install --global typescript webpack
npm install
npm link typescript

# Overwrite react-router defs for 2.x.x with up-to-date ones.
curl 'https://raw.githubusercontent.com/types/npm-react-router/master/react-router.d.ts' \
    > node_modules/\@types/react-router/index.d.ts

