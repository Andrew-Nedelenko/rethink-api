const { Router } = require('express');
const bodyParser = require('body-parser');

const {
  getCategory,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/cathegory');

const {
  getArticles, getOneArticle,
  addArticle, updateArticle,
  deleteArticle,
} = require('../controllers/articles');

const { searchArticle } = require('../controllers/search');

const { loginMiddleware } = require('../middleware/login-md');
const { authMiddleware } = require('../middleware/auth-md');
const { userRegistrate } = require('../controllers/user-auth');

const router = Router();

router.get('/cathegory', getCategory);
router.get('/category/:categoryname', getCategoryById);
router.post('/addcathegory', bodyParser.json(), addCategory);
router.patch('/updatecathegory', bodyParser.json(), updateCategory);
router.delete('/deletecathegory/:id', deleteCategory);

router.get('/articles', getArticles);
router.get('/article/:link', getOneArticle);
router.post('/addarticle', bodyParser.json(), addArticle);
router.patch('/updatearticle', bodyParser.json(), updateArticle);
router.delete('/deletearticle/:id', deleteArticle);

router.post('/searcharticle', bodyParser.json(), searchArticle);

router.post('/userauth', bodyParser.json(), authMiddleware, userRegistrate);
router.post('/userlogin', bodyParser.json(), loginMiddleware);

module.exports = { router };
