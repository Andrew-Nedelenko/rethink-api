import { Context } from 'koa';
import { promiseQuery } from '../../config/Database';

export const getAllCategories = async (ctx: Context): Promise<void> => {
  const data = await promiseQuery('SELECT categoryId, categoryName FROM category', []);
  ctx.body = data;
};
