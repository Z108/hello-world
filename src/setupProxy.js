// 多个代理
const {createProxyMiddleware} = require("http-proxy-middleware")
module.exports = function (app) {   //app 是express 框架创建的那个app
    // app.use(proxy("/manage", {
    //     target: "http://baidu.com",
    //     changeOrigin: true
    // }))
    // app.use(proxy("/manage/api", {
    //     target: "http://adminntest,happymmall.com:7000",
    //     changeOrigin: true
    // }))

    app.use(createProxyMiddleware("/home",{
        target:"http://api.baxiaobu.com/index.pfp",
        chargeOrigin:true
    }))
    app.use(createProxyMiddleware("/manage/api",{
        target:"http://google.com",
        chargeOrigin:true
    }))

}

