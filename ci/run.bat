npm install -g cnpm --registry=https://registry.npm.taobao.org
cd anxunsi-client
call cnpm i && call cnpm run build
cd ..\anxunsi-server
call cnpm i && call cnpm run dev