﻿import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlesPageShema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    view: ArticleView;

    page: number;
    hasMore: boolean;
    limit?: number;

    _inited: boolean;
}
