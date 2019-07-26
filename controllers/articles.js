const { db } = require('../database/connect');

const getArticles = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM articles ORDER BY articleid ASC');
    if (rows.length > 0) {
      res.send(rows);
    } else {
      res.send({ msg: 'no articles yet' });
    }
  } catch (e) {
    res.status(400).send({ msg: 'something wrong' });
  }
};

const getOneArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query(`SELECT * FROM articles WHERE articleid = ${id}`);
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
  const { title, description, cathegory } = req.body;
  try {
    await db.query(`INSERT INTO articles (title, description, cathegory) VALUES ('${title}', '${description}', '${cathegory}')`);
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
    const probe = await db.query(`UPDATE articles SET title = '${title}', description = '${description}', cathegory = '${cathegory}' WHERE articleid = ${id}`);
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
    const { rowCount } = await db.query(`DELETE FROM articles WHERE articleid = ${id}`);
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
