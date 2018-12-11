#!/usr/bin/env bash

cd anxunsi-client
npm i && npm run build
cd ../anxunsi-server
npm i && npm run dev