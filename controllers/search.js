const { db } = require('../database/connect');

const searchArticle = async (req, res) => {
  const { searchData } = req.body;
  const { rows } = await db.query(`SELECT * FROM article WHERE description LIKE '%${searchData}%'`);
  res.status(200).json({ rows });
};

module.exports = { searchArticle };
