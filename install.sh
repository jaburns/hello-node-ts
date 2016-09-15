#!/usr/bin/env bash

npm install --global typescript typings webpack
npm install
npm link typescript  # Needed for webpack ts-loader to use typescript
typings install

