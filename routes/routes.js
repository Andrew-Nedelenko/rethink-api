const { Router } = require('express');
const {
  getCategory, addCategory,
  updateCategory, deleteCategory,
} = require('../controllers/cathegory');

const router = Router();

router.get('/cathegory', getCategory);

router.post('/addcathegory', addCategory);

router.post('/updatecathegory', updateCategory);

router.post('/deletecathegory', deleteCategory);


module.exports = { router };
