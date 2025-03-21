import { combineReducers } from '@reduxjs/toolkit';

import { ArticleDetailsPageShema } from '../types';
import { articleDetailsCommentsReducer } from './arcticleCommentsSlice/arcticleDetailsCommentsSlice';
import { articleDetailsRecommendationsReducer } from './ArticleDetailsRecommendationSlice/ArticleDetailsRecommendationSlice';

export const articleDetailsPageReducer =
    combineReducers<ArticleDetailsPageShema>({
        recommendations: articleDetailsRecommendationsReducer,
        comments: articleDetailsCommentsReducer,
    });
