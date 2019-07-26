const { Router } = require('express');
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
router.post('/addcathegory', addCategory);
router.post('/updatecathegory', updateCategory);
router.post('/deletecathegory', deleteCategory);

router.get('/articles', getArticles);
router.get('/article/:id', getOneArticle);
router.post('/addarticle', addArticle);
router.post('/updatearticle', updateArticle);
router.delete('/deletearticle/:id', deleteArticle);


module.exports = { router };
