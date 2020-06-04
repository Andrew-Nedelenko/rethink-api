export interface ArticleTypes {
    artcileId: number;
    title: string;
    content: string;
    categoryKey: number;
    author: string;
    createdArticle: Date;
    updatedArticle: Date;
}

export type ArticleInput = {
    title: string;
    content: string;
    categoryKey: number;
    author: string;
}
