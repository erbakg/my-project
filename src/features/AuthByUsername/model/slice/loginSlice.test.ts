import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test setUsername', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };

        expect(loginReducer(state as LoginSchema, loginActions.setUserName('1234')))
            .toEqual({ username: '1234' });
    });

    test('test setPassword', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };

        expect(loginReducer(state as LoginSchema, loginActions.setPassword('123')))
            .toEqual({ password: '123' });
    });
});
