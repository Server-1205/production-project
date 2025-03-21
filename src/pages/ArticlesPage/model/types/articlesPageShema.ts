import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import {
    ArticleSortField,
    ArticleType,
} from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageShema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    page: number;
    hasMore: boolean;
    limit: number;
    // filters
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;
    _inited: boolean;
}
