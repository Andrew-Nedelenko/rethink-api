import Router from 'koa-router';
import { articleRouter } from './article.routes';
import { categoryRouter } from './category.routes';

const router = new Router({ prefix: '/private' });

router.use(articleRouter.routes()).use(categoryRouter.routes());

export { router as privateRouter };
