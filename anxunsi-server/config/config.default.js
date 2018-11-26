'use strict';

module.exports = appInfo => {
    const config = exports = {};
    config.mysql = {
        // 单数据库信息配置
        client: {
            // host
            host: 'localhost',
            // 端口号
            port: '3306',
            // 用户名
            user: 'root',
            // 密码
            password: '',
            // 数据库名
            database: 'anxunsi',
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    };

    exports.sequelize = {
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        database: 'anxunsi',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: '',
        // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
        // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
        // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
        // more sequelize options
    };
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_anxunsi_token';

    // add your config here
    config.middleware = [];

    return config;
};

