const { db } = require('../database/connect');
const { mysqlRealEscapeString } = require('../utils/escapestr');
const { createLink } = require('../utils/createLink');

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
  const { link } = req.params;
  try {
    const { rows } = await db.query(`SELECT * FROM article WHERE link = '${link}'`);
    if (rows.length > 0) {
      res.send(rows);
    } else {
      res.status(400).send({ msg: `no article with title ${link}` });
    }
  } catch (e) {
    res.status(400).send({ msg: 'something wrong' });
  }
};

const addArticle = async (req, res) => {
  const { title, description, category } = req.body;
  console.log(req.body);
  const realEscape = mysqlRealEscapeString(description);
  console.log(createLink, '\n', realEscape);
  try {
    await db.query(`INSERT INTO article (title, description, link, category, created_at) VALUES ('${title}', '${description}', '${createLink(title)}', '${category}', 'now()');`);
    res.status(201).send({ created: 'article has been created' });
  } catch (e) {
    console.log(e);
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
      res.status(201).send({ message: 'article updated!' });
    } else {
      res.status(403).send({ message: `article id ${id} is not found` });
    }
  } catch (e) {
    console.log(e);
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
      res.status(204).send({ msg: `no article with id ${id}` });
    }
  } catch (e) {
    res.status(400).send({ msg: 'something wrong' });
  }
};

module.exports = {
  getArticles, getOneArticle, addArticle, updateArticle, deleteArticle,
};
