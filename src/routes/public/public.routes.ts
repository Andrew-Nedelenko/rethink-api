import Router from 'koa-router';
import { getAllCategories } from '../../controllers/category.controllers/getAllCategory';
import { getArticles } from '../../controllers/article.controllers/getArticles';

const router = new Router({ prefix: '/public' });

router.get('/category', getAllCategories);
router.get('/article/:limit/:page', getArticles);

export { router as publicRouter };
