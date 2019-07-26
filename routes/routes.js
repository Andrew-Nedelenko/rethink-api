const { Router } = require('express');
const bodyParser = require('body-parser');
const {
  getCategory, addCategory,
  updateCategory, deleteCategory,
} = require('../controllers/cathegory');
const {
  getArticles, getOneArticle,
  addArticle, updateArticle,
  deleteArticle,
} = require('../controllers/articles');

const router = Router();

router.get('/cathegory', getCategory);
router.post('/addcathegory', bodyParser.json(), addCategory);
router.patch('/updatecathegory', bodyParser.json(), updateCategory);
router.delete('/deletecathegory/:id', deleteCategory);

router.get('/articles', getArticles);
router.get('/article/:id', getOneArticle);
router.post('/addarticle', bodyParser.json(), addArticle);
router.patch('/updatearticle', bodyParser.json(), updateArticle);
router.delete('/deletearticle/:id', deleteArticle);


module.exports = { router };
