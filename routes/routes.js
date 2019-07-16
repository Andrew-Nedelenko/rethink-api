const Router = require('koa-router');
const { getCategory, addCategory, deleteCategory } = require('../controllers/cathegory');

const router = new Router();

router.get('/cathegory', getCategory);

router.post('/addcathegory', addCategory);

router.post('/deletecathegory', deleteCategory);

module.exports = { router };
