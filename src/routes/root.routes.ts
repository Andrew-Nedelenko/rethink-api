import Router from 'koa-router';
import { categoryRouter } from './category.routes';

const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = 'hello';
});

router.use(categoryRouter.routes());

export { router };
