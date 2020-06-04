import { Context } from 'koa';
import { promiseQuery } from '../../config/Database';
import { ArticleInput } from '../../entity/ArticleTypes';


export const addArticle = async (ctx: Context) => {
  const {
    title, content, categoryKey, author,
  }: ArticleInput = ctx.request.body;
  try {
    const add = await promiseQuery(`
    INSERT INTO articles (
        title,
        content,
        categoryKey,
        author
    ) VALUES (?,?,?,?)
`, [title, content, categoryKey, author]);
    ctx.status = 201;
    ctx.body = { add, msg: 'article added' };
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      msg: 'Cannot create article',
      e,
    };
  }
};
