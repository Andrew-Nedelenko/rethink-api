import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import { addCategory } from '../../controllers/category.controllers/addCategory';

const router = new Router({ prefix: '/category' });

router.post('/add', bodyParser(), addCategory);

export { router as categoryRouter };
