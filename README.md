# 俺寻思?

base:**Node version = 9.3.0 , NPM = 6.4.1 , Mysql = 5.7.0 , Chrome**,  
不保证其他设备的兼容性

## 克隆项目到本地
```
git clone --depth 1 https://github.com/1102568869/mysql-dictionary.git
```
```
cd mysql-dictionary
```
## 一键启动  
### mac:
```
sh ./ci/run.sh
```

### win:
~~谁会写求告诉我,我他喵的不会...~~

分步走呗,依次执行以下每行命令
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
cd anxunsi-client
cnpm i && cnpm run build
cd ../anxunsi-server
cnpm i && cnpm run dev
```

**tips:如果启动报错,请尝试修改`anxunsi-server/config/config.default.js`文件中的数据库连接相关配置**
```
host: 'xxx',
port: 'xxx',
username: 'xxx',
password: 'xxx',
```
然后再从`anxunsi-server`目录重新尝试执行`cnpm run dev`命令

## 访问项目  
愉快的在浏览器输入[http://127.0.0.1:7001](http://127.0.0.1:7001)访问项目吧