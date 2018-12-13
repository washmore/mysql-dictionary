#!/usr/bin/env bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
cd anxunsi-client
cnpm i && cnpm run build
cd ../anxunsi-server
cnpm i && cnpm run dev