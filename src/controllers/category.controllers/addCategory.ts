import { Context } from 'koa';
import { promiseQuery } from '../../config/Database';
import { CategoryInput } from '../../entity/CategoryTypes';

export const addCategory = async (ctx: Context): Promise<void> => {
  const { categoryName }: CategoryInput = ctx.request.body;
  try {
    const data = await promiseQuery(`
    INSERT INTO category
    (categoryName)
      VALUES (?)
      `, [categoryName]);
    ctx.status = 201;
    ctx.body = data;
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      status: 400,
      msg: 'Cannot create new category',
      log: e,
    };
  }
};
