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

module.exports = { getCategory, addCategory };
