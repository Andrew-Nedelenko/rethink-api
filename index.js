const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const { customLogger } = require('./logs/logger');
const { router } = require('./routes/routes');
const { evrt: { port, url } } = require('./utils/config');
require('./database/connect');

const app = new Koa();

customLogger(app);

app.use(bodyParser())
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, url, () => console.log(`listen on http://${url}:${port}`));
