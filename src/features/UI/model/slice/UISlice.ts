import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UIShema } from '../types/UIShema';

const initialState: UIShema = {
    scroll: {},
};

const uiSlice = createSlice({
    name: 'UI',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: uiActions } = uiSlice;

export const { reducer: uiReducer } = uiSlice;
