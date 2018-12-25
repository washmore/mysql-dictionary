module.exports = {
    outputDir: '../anxunsi-server/app/public',
    baseUrl: '',
    assetsDir: 'static',
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    css: undefined,
    devServer: {
        hot: true,
        proxy: {
            '/*': {
                // target: 'https://family.wangyalan.net',
                target: 'http://localhost:7001',
                secure: false,
                changeOrigin: true,
                // bypass: function (req, res, proxyOptions) {
                //     if (req.originalUrl.indexOf("/public") !== -1) {
                //         console.info("req:", req.originalUrl);
                //         return false;
                //     }
                // },
                ws: false,
                pathRewrite: {
                    "^/*": "/"
                }
            }
        }
    },
    chainWebpack: config => {
        // // GraphQL Loader
        // config.module
        //     .rule('url')
        //     .test(/\.(mp3|wav)$/)
        //     .use('url-loader')
        //     .loader('url-loader')
        //     .end()
    },
}