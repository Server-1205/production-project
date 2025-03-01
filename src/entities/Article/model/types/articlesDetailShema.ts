import { Article } from './article';

export interface ArticleDetailShema {
    isLoading: boolean;
    error?: string;
    data?: Article;
}
