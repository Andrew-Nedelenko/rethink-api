import Koa from 'koa';
import helmet from 'koa-helmet';
import { router } from './routes/root.routes';
import { logger } from './config/Logger';


class App {
    private readonly app: Koa = new Koa();

    constructor() {
      logger(this.app);
      this.app
        .use(helmet())
        .use(router.routes())
        .use(router.allowedMethods());
    }

    getApp() {
      return this.app;
    }
}

export const app = new App().getApp();
