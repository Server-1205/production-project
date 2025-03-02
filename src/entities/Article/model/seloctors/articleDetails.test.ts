import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailData, getArticleDetailIsLoading, getArticleDetailError } from './articleDetails';

describe('articleDetails selectors', () => {
    const state: StateSchema = {
        articleDetails: {
            data: {
                id: '1',
                title: 'Test Article',
                subtitle: '',
                img: '',
                views: 0,
                createdAt: '',
                type: [],
                blocks: [],
            },
            isLoading: true,
            error: 'Error message',
        },
    };

    test('getArticleDetailData should return article data', () => {
        expect(getArticleDetailData(state)).toEqual({ id: '1', title: 'Test Article' });
    });

    test('getArticleDetailIsLoading should return loading state', () => {
        expect(getArticleDetailIsLoading(state)).toBe(true);
    });

    test('getArticleDetailError should return error message', () => {
        expect(getArticleDetailError(state)).toBe('Error message');
    });

    test('getArticleDetailData should return undefined if state is empty', () => {
        const emptyState: StateSchema = {};
        expect(getArticleDetailData(emptyState)).toBeUndefined();
    });

    test('getArticleDetailIsLoading should return false if state is empty', () => {
        const emptyState: StateSchema = {};
        expect(getArticleDetailIsLoading(emptyState)).toBeUndefined();
    });

    test('getArticleDetailError should return undefined if state is empty', () => {
        const emptyState: StateSchema = {};
        expect(getArticleDetailError(emptyState)).toBeUndefined();
    });
});
