import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleView } from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';

export const getArticlesPageIsLoadig = (state: StateSchema) =>
    state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) =>
    state.articlesPage?.error;
export const getArticlesPageViwe = (state: StateSchema) =>
    state.articlesPage?.view || ArticleView.SMALL;
export const getArticlesPageNum = (state: StateSchema) =>
    state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) =>
    state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: StateSchema) =>
    state.articlesPage?.hasMore;
export const getArticlesPageSort = (state: StateSchema) =>
    state.articlesPage?.sort ?? ArticleSortField.TITLE;
export const getArticlesPageOrder = (state: StateSchema) =>
    state.articlesPage?.order ?? 'asc';
export const getArticlesPageSearch = (state: StateSchema) =>
    state.articlesPage?.search ?? '';
export const getArticlesPageInited = (state: StateSchema) =>
    state.articlesPage?._inited;
export const getArticlesPageType = (state: StateSchema) =>
    state.articlesPage?.type ?? ArticleType.All;
