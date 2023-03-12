import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileErrors } from '../../types/profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('should return', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileErrors.INCORRECT_AGE,
                    ValidateProfileErrors.INCORRECT_CITY,
                ],
            },
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileErrors.INCORRECT_AGE,
            ValidateProfileErrors.INCORRECT_CITY,
        ]);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileValidateErrors(state as StateSchema)).toEqual([]);
    });
});
