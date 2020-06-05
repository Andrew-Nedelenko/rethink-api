export interface CategoryTypes {
    categoryId: number;
    categoryName: string;
    createdCategory: Date;
    updatedCategory: Date;
}

export type CategoryInput = {categoryName: string}
export type CategoryUpdateInput = {
    categoryId: number;
    categoryName: string;
}
