const { db } = require('../database/connect');

const getArticles = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM article ORDER BY id ASC');
    if (rows.length > 0) {
      res.send(rows);
    } else {
      res.status(204).send({ msg: 'no articles yet' });
    }
  } catch (e) {
    res.status(400).send({ msg: 'something wrong' });
  }
};

const getOneArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query(`SELECT * FROM article WHERE id = ${id}`);
    if (rows.length > 0) {
      res.send(rows);
    } else {
      res.status(400).send({ msg: `no article with id ${id}` });
    }
  } catch (e) {
    res.status(400).send({ msg: 'something wrong' });
  }
};

const addArticle = async (req, res) => {
  const { title, description, category } = req.body;
  try {
    await db.query(`INSERT INTO article (title, description, category, created_at) VALUES ('${title}', '${description}', '${category}', 'now()');`);
    res.send({ created: 'article has been created' });
  } catch (e) {
    res.status(400).send({ msg: 'something wrong' });
  }
};

const updateArticle = async (req, res) => {
  const {
    id, title, description, cathegory,
  } = req.body;
  try {
    const probe = await db.query(`UPDATE article SET title = '${title}', description = '${description}', category = '${cathegory}', updated_at = 'now()' WHERE id = ${id}`);
    if (probe.rowCount > 0) {
      res.status(200).send({ message: 'article updated!' });
    } else {
      res.status(403).send({ message: `article id ${id} is not found` });
    }
  } catch (e) {
    res.status(400).send({ msg: 'something wrong' });
  }
};

const deleteArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const { rowCount } = await db.query(`DELETE FROM article WHERE id = ${id}`);
    if (rowCount > 0) {
      res.send({ msg: 'article delete succesfully' });
    } else {
      res.send({ msg: `no article with id ${id}` });
    }
  } catch (e) {
    res.status(400).send({ msg: 'something wrong' });
  }
};

module.exports = {
  getArticles, getOneArticle, addArticle, updateArticle, deleteArticle,
};
