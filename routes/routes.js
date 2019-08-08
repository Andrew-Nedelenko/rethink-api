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


module.exports = { router };
