import {
    AnyAction,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailShema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { AddCommentFormShema } from 'features/AddCommentForm';
import { LoginSchema } from 'features/AuthByUsername';
import { UIShema } from 'features/UI/model/types/UIShema';
import {
    ArticleDetailsCommentsShema,
    ArticleDetailsPageShema,
    ArticleDetailsRecommendationShema,
} from 'pages/ArticleDetailsPage';
import { ArticlesPageShema } from 'pages/ArticlesPage';
import { CombinedState } from 'redux';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    ui: UIShema;

    // Асинхронные редюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailShema;
    addCommentForm?: AddCommentFormShema;
    articlesPage?: ArticlesPageShema;
    articleDetailsPage?: ArticleDetailsPageShema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
