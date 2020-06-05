import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import { addCategory } from '../../controllers/category.controllers/addCategory';
import { updateCategory } from '../../controllers/category.controllers/updateCategory';
import { updateCategoryField } from '../../middleware/validations/updateCategoryField';

const router = new Router({ prefix: '/category' });

router.post('/add', bodyParser(), addCategory);
router.patch('/update', bodyParser(), updateCategoryField, updateCategory);

export { router as categoryRouter };
