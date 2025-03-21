import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

export interface ArticleDetailsRecommendationShema
    extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
}
