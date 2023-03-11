import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getCounter', () => {
    test('should return state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false,
                username: 'username',
                password: '12345',
                error: 'error',
            },
        };

        expect(getLoginState(state as StateSchema)).toEqual({
            isLoading: false,
            username: 'username',
            password: '12345',
            error: 'error',
        });
    });

    test('should return empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
