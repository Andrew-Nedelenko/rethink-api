import { Context, Next } from 'koa';
import { CategoryUpdateInput } from '../../entity/CategoryTypes';

export const updateCategoryField = async (ctx: Context, next: Next,
): Promise<void> => {
  const { categoryId, categoryName }: CategoryUpdateInput = ctx.request.body;
  if (categoryId === undefined || categoryName === undefined) {
    ctx.throw(400);
  }
  await next();
};
