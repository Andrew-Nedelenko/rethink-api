const Koa = require('koa');
require('dotenv').config();

const app = new Koa();

app.use((ctx) => {
  ctx.body = 'it works';
});

app.listen(process.env.PORT || 2600, () => console.log(`Starting on ${process.env.PORT}`));
