const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const { customLogger } = require('./logs/logger');
const { router } = require('./routes/routes');
const { evrt: { port, url } } = require('./utils/config');
require('./model/Schema');

const app = new Koa();

customLogger(app);

app.use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, url);
