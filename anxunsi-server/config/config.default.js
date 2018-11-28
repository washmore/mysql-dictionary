'use strict';
const path = require("path");

module.exports = appInfo => {
    const config = exports = {};
    exports.view = {
        defaultViewEngine: 'nunjucks',
        // mapping: {
        //     '.html': 'nunjucks',
        // },
        root: path.join(appInfo.baseDir, '/app/'),
    };

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_anxunsi_token';

    // add your config here
    config.middleware = [];

    return config;
};
