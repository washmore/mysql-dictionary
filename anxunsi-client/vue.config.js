module.exports = {
    outputDir: '../anxunsi-server/app/public',
    baseUrl: '',
    assetsDir: '../public',
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
                //     console.info("req:", req.originalUrl);
                //     if (req.originalUrl.indexOf("/sockjs-node") != -1) {
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
}