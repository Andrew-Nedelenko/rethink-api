const { db } = require('../database/connect');

const searchArticle = async (req, res) => {
  const { searchData } = req.body;
  const { rows } = await db.query(`SELECT * FROM article WHERE title LIKE '%${searchData}%' OR description LIKE '%${searchData}%' LIMIT 10`);
  setTimeout(() => { res.status(200).json({ rows }); }, 330);
};

module.exports = { searchArticle };
