/* eslint-disable max-len */
import Application, { Context } from 'koa';
import chalk from 'chalk';


class Logger {
  constructor(private readonly app: Application) {
    this.app.use(async (ctx: Context, next) => {
      await next();
      const rt = ctx.response.get('X-Response-Time');
      global.console.log(`${`${chalk.blue(ctx.method)} ${chalk.blue('->')} ${ctx.response.status < 400 ? chalk.blue(ctx.response.status) : chalk.red(ctx.response.status)}`} - ${chalk.blue(ctx.url)} - ${rt} - \x1b[33mhostOrigin\x1b[0m -> \x1b[36m${ctx.headers.origin}\x1b[0m \x1b[33muserAgent\x1b[0m -> \x1b[36m${ctx.headers['user-agent']}\x1b[0m \n\x1b[2mcookies: ${ctx.headers.cookie ? JSON.stringify(ctx.headers.cookie) : 'no cookies'}\x1b[0m`);
    });

    this.app.use(async (ctx, next) => {
      const start = Date.now();
      await next();
      const ms = Date.now() - start;
      ctx.set('X-Response-Time', `${ms}ms`);
    });
  }
}

export const logger = (app: Application) => new Logger(app);
