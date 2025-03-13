import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comments } from 'entities/Article/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailData } from 'entities/Article/model/seloctors/articleDetails';

import { fetchCommentsByArticleId } from '../fetchCommentByArticleId/fetchCommentByArticleId';

export const sendCommentForArticle = createAsyncThunk<
    Comments,
    string,
    ThunkConfig<string>
>('articleDetails/sendCommentForArticle', async (text, thunkApi) => {
    const {
        extra, rejectWithValue, getState, dispatch,
    } = thunkApi;

    const userData = getUserAuthData(getState());
    const article = getArticleDetailData(getState());

    if (!userData || !text || !article) {
        return rejectWithValue('no data');
    }

    try {
        const response = await extra.api.post<Comments>('/comments', {
            articleId: article?.id,
            userId: userData.id,
            text,
        });

        if (!response.data) {
            throw new Error();
        }

        dispatch(fetchCommentsByArticleId(article.id));

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
