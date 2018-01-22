
const router = require('koa-router')();

const user = require('./user');
const index = require('./index');

router.use('/', index.routes(), index.allowedMethods());
router.use('/user', user.routes(), user.allowedMethods());

module.exports = router;