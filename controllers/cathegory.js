const { db } = require('../database/connect');

const getCategory = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM cathegory ORDER BY id ASC');
    res.status(200).send(rows);
  } catch (e) {
    res.status(400).send({ msg: 'something wrong' });
  }
};

const addCategory = async (req, res) => {
  const { cathegory } = req.body;
  try {
    await db.query(`INSERT INTO cathegory (cathegory) VALUES ('${cathegory}')`);
    res.status(200).send({ msg: `cathegory ${cathegory} inserted` });
  } catch (e) {
    res.status(400).send({ msg: 'something wrong' });
  }
};

const updateCategory = async (req, res) => {
  const { id, cathegory } = req.body;
  try {
    const probe = await db.query(`UPDATE cathegory SET cathegory = '${cathegory}' WHERE id = ${id}`);
    if (probe.rowCount > 0) {
      res.status(200).send({ message: `cathegory ${cathegory} updated!` });
    } else {
      res.status(403).send({ message: `cathegory id ${id} is not found` });
    }
  } catch (e) {
    res.status(400).send({ msg: 'something wrong' });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const probe = await db.query(`DELETE FROM cathegory WHERE id = ${id}`);
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
  getCategory, addCategory, updateCategory, deleteCategory,
};
