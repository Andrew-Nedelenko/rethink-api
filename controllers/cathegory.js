const { db } = require('../database/connect');

const getCategory = async (req, res) => {
  const { rows } = await db.query('SELECT * FROM cathegory ORDER BY id ASC');
  res.status(200).send(rows);
};

const addCategory = async (req, res) => {
  const { cathegory } = req.body;
  try {
    const create = await db.query(`INSERT INTO cathegory (cathegory) VALUES ('${cathegory}')`);
    res.status(200).send(create);
  } catch (e) {
    res.status(409).send({ cathegory, msg: `${cathegory} alredy exist` });
  }
};

const updateCategory = async (req, res) => {
  const { id, cathegory } = req.body;
  const probe = await db.query(`UPDATE cathegory SET cathegory = '${cathegory}' WHERE id = ${id}`);
  if (probe.rowCount > 0) {
    res.status(200).send({ message: `cathegory ${cathegory} updated!` });
  } else {
    res.status(403).send({ message: `cathegory id ${id} is not found` });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.body;
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
};

module.exports = {
  getCategory, addCategory, updateCategory, deleteCategory,
};
