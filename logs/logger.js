const customLogger = (app) => {
  app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    global.console.log(`\x1b[35m${ctx.method}\x1b[0m \x1b[36m${ctx.url}\x1b[0m - ${rt} - \x1b[35m${ctx.response.status}\x1b[0m - \x1b[33mhostOrigin\x1b[0m -> \x1b[36m${ctx.headers.origin}\x1b[0m \x1b[33muserAgent\x1b[0m -> \x1b[36m${ctx.headers['user-agent']}\x1b[0m \n\x1b[2mcookies: ${ctx.headers.cookie ? JSON.stringify(ctx.headers.cookie) : 'no cookies'}\x1b[0m`);
  });

  app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  });
};


module.exports = { customLogger };
