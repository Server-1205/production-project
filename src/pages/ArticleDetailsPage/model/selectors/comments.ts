import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) =>
    state.articleDetailsComment?.isLoading;
export const getArticleCommensError = (state: StateSchema) => state.articleDetailsComment?.error;
