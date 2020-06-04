import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import { addArticle } from '../../controllers/article.controllers/addArticle';

const router = new Router({ prefix: '/article' });

router.post('/add', bodyParser(), addArticle);

export { router as articleRouter };
