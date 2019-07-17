const { db } = require('../database/connect');

const getCategory = async (ctx) => {
  const { rows } = await db.query('SELECT * FROM cathegory ORDER BY id ASC');
  ctx.body = rows;
};

const addCategory = async (ctx) => {
  const { cathegory } = ctx.request.body;
  await db.query(`INSERT INTO cathegory (cathegory) VALUES ('${cathegory}')`);
  ctx.status = 200;
};

const updateCategory = async (ctx) => {
  const { id, cathegory } = ctx.request.body;
  const probe = await db.query(`UPDATE cathegory SET cathegory = '${cathegory}' WHERE id = ${id}`);
  if (probe.rowCount > 0) {
    ctx.body = {
      status: 200,
      message: `cathegory ${cathegory} updated!`,
    };
  } else {
    ctx.body = {
      status: 403,
      message: `cathegory id ${id} is not found`,
    };
  }
};

const deleteCategory = async (ctx) => {
  const { id } = ctx.request.body;
  const probe = await db.query(`DELETE FROM cathegory WHERE id = ${id}`);
  if (probe.rowCount > 0) {
    ctx.body = {
      status: 200,
      message: `category ${id} has been deleted`,
    };
  } else {
    ctx.body = {
      status: 403,
      message: `id ${id} not found`,
    };
  }
};

module.exports = {
  getCategory, addCategory, updateCategory, deleteCategory,
};
