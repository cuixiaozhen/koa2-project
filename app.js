
const path = require('path');
const Koa = require('koa');
const http = require('http');
const koaStatic = require('koa-static');
const views = require('koa-views');
const session = require('koa-session2');
const bodyParser = require('koa-bodyparser');
const config = require("./server/config/config");
const routers = require('./server/routes/api');
const logger = require('./server/utils/log').logger;
const app = new Koa();

// 配置ctx.body解析中间件

app.use(bodyParser());

// 配置ctx.body解析中间件
app.use(session(
    {
        key: "SESSIONID",   //default "koa:sess"
        maxAge: 3600000,     //失效时间
    }
));

// 配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './client/views'), {
    extension: 'ejs'
}));

// 配置静态资源加载中间件
app.use(koaStatic(
    path.join(__dirname , './client/static')
));

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods());

app.listen(config.port);
logger.log('Listen on' + config.port + '.');