import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './getArticleDetails';

describe('getArticleDetailsData', () => {
    test('should return', () => {
        const article = {
            id: '1',
            title: 'Javascript news',
        };
        const state: DeepPartial<StateSchema> = {

            articleDetails: {
                data: article,
            },
        };

        expect(getArticleDetailsData(state as StateSchema)).toEqual(article);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsIsLoading', () => {
    test('should return', () => {
        const article = {
            id: '1',
            title: 'Javascript news',
        };
        const state: DeepPartial<StateSchema> = {

            articleDetails: {
                isLoading: true,
                data: article,
            },
        };

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });
});

describe('getArticleDetailsError', () => {
    test('should return', () => {
        const article = {
            id: '1',
            title: 'Javascript news',
        };
        const state: DeepPartial<StateSchema> = {

            articleDetails: {
                error: 'error',
            },
        };

        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});
