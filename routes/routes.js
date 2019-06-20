const Router = require('koa-router');
const { User } = require('../model/Schema');

const router = new Router();

router.get('/users', async (ctx) => {
  const data = await User.findAll();
  ctx.body = data;
});

module.exports = { router };
