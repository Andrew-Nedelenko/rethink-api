import Router from 'koa-router';
import { publicRouter } from './public/public.routes';
import { privateRouter } from './private/private.routes';

const router = new Router({ prefix: '/api/v1' });

router.use(publicRouter.routes()).use(privateRouter.routes());

export { router };
