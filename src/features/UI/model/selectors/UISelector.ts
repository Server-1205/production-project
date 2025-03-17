import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const getUIscroll = (state: StateSchema) => state.ui.scroll;
export const getUiScrollByPath = createSelector(
    getUIscroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] ?? 0,
);
