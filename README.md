# 项目介绍

项目初衷是为了应付公司的IT审计中针对数据库的审查.便于开发人员check各个数据库,表的comment信息/主键/自增/非空/索引是否完备,查漏补缺.  

# 软件架构
近日新上手基于koa的node服务端脚手架egg.js,再加上往日的vue.尝试完成一个完整的项目without咖啡豆.   

**目录示意图:**
```
- anxunsi
  - anxunsi-server
  - anxunsi-client

```
其中`anxunsi-server`使用egg开发,作为服务端,`anxunsi-client`使用vue开发前端静态资源.构建时会将静态资源打包至服务端对应的目录,然后启动服务端项目,即可正常访问.

# 安装教程

base version:**Node = 9.3.0 , NPM = 6.4.1 , Mysql = 5.7.0 , Chrome = 70**,  
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

**tips:warning信息请忽略.如果启动报错,请修改`anxunsi-server/config/config.default.js`文件中的数据库连接相关配置,然后再从`anxunsi-server`目录重新尝试执行`cnpm run dev`命令**  
```
host: 'xxx',
port: 'xxx',
username: 'xxx',
password: 'xxx',
```
**注意:不要改database的值!不要改database的值!不要改database的值!**

## 访问项目  
愉快的在浏览器输入[ht

# 参与贡献
1. Fork 本项目  
2. 新建 Feat_xxx 分支  
3. 提交代码  
4. 新建 Pull Request  

目前持续建设中...欢迎各位吐槽,  
传送门[https://github.com/1102568869/mysql-dictionary](https://github.com/1102568869/mysql-dictionary)

