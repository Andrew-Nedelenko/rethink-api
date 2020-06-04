import { Context } from 'koa';
import { promiseQuery } from '../../config/Database';

export const getArticles = async (ctx: Context) => {
  const limit = parseFloat(ctx.params.limit);
  const page = parseFloat(ctx.params.page);

  if (page > 50) {
    ctx.throw(400);
  }
  const [{ count }] = await promiseQuery(`
    SELECT COUNT(articleId) AS count FROM articles;
    `, []);
  const articles = await promiseQuery(`
    SELECT
    articleId,
    title,
    content,
    categoryKey,
    categoryName AS category,
    author,
    updatedArticle
    FROM articles 
    LEFT JOIN category ON categoryKey = categoryId
    ORDER BY updatedArticle DESC
    LIMIT ? 
    OFFSET ?
  `, [limit, (page * limit) - limit]);
  ctx.body = {
    articles,
    count,
  };
};
