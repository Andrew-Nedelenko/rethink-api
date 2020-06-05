import { Context } from 'koa';
import { CategoryUpdateInput } from '../../entity/CategoryTypes';
import { promiseQuery } from '../../config/Database';

export const updateCategory = async (ctx: Context) :Promise<void> => {
  const { categoryId, categoryName }: CategoryUpdateInput = ctx.request.body;
  try {
    const update = await promiseQuery(`
    UPDATE category SET categoryName = ? WHERE categoryId = ?
  `, [categoryName, categoryId]);
    ctx.status = 201;
    ctx.body = update;
  } catch (e) {
    ctx.throw(400, e);
  }
};
