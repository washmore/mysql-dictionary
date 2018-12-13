call npm config set registry https://registry.npm.taobao.org
cd anxunsi-client
call npm i && call npm run build
cd ..\anxunsi-server
call npm i && call npm run dev