/**
 * restful api 子路由
 */

const router = require('koa-router')();
const user = require('../controller/user.js');
const routers = router

    .get('/login', user.login)
    .post('/signIn', user.signIn)
    .get('/register', user.register)
    .post('/registerIn', user.registerIn);

module.exports = routers;