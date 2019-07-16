const { db } = require('../database/connect');

const getCategory = async (ctx) => {
  const { rows } = await db.query('SELECT * FROM cathegory');
  ctx.body = rows;
};


const addCategory = async (ctx) => {
  const { cathegory } = ctx.request.body;
  await db.query(`INSERT INTO cathegory (cathegory) VALUES ('${cathegory}')`);
  ctx.status = 200;
};

const deleteCategory = async (ctx) => {
  const { id } = ctx.request.body;
  try {
    await db.query(`DELETE FROM cathegory WHERE id = ${id}`);
    ctx.status = 200;
  } catch (e) {
    ctx.status = 403;
    throw new Error(e);
  }
};

module.exports = { getCategory, addCategory, deleteCategory };
