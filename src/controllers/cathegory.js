const { db } = require('../database/connect');

const getCategory = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM categories ORDER BY id ASC;');
    res.status(200).send(rows);
  } catch (e) {
    res.status(400).send({ msg: 'something wrong' });
  }
};

const getCategoryById = async (req, res) => {
  const { categoryname } = req.params;
  try {
    const { rows } = await db.query(`SELECT * FROM article WHERE category = '${categoryname}'`);
    res.status(200).send(rows);
  } catch (e) {
    res.status(400).send({ msg: 'something went wrong' });
  }
};

const addCategory = async (req, res) => {
  const { cathegory } = req.body;
  try {
    await db.query(`INSERT INTO categories (category_name) VALUES ('${cathegory}')`);
    res.status(201).send({ msg: `category ${cathegory} inserted` });
  } catch (e) {
    res.status(400).send({ msg: 'something wrong' });
  }
};

const updateCategory = async (req, res) => {
  const { id, cathegory } = req.body;
  try {
    const probe = await db.query(`UPDATE categories SET category_name = '${cathegory}' WHERE id = ${id}`);
    if (probe.rowCount > 0) {
      res.status(201).send({ message: `category ${cathegory} updated!` });
    } else {
      res.status(403).send({ message: `category id ${id} is not found` });
    }
  } catch (e) {
    res.status(400).send({ msg: 'something wrong' });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const probe = await db.query(`DELETE FROM categories WHERE id = ${id}`);
    if (probe.rowCount > 0) {
      res.status(200).send({
        message: `category ${id} has been deleted`,
      });
    } else {
      res.status(403).send({
        message: `id ${id} not found`,
      });
    }
  } catch (e) {
    res.status(400).send({ msg: 'something wrong' });
  }
};

module.exports = {
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
  getCategoryById,
};
