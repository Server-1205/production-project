import { EntityState } from '@reduxjs/toolkit';
import { Comments } from 'entities/Comment';

export interface ArticleDetailsCommentsShema extends EntityState<Comments> {
    isLoading?: boolean;
    error?: string;
}
