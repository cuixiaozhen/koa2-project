/**
 * restful api 子路由
 */

const router = require('koa-router')();
const index = require('../controller/index.js');
const routers = router

    .get('/', index.index)

module.exports = routers;