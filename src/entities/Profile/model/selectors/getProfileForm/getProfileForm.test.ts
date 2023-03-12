import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileFrom } from './getProfileForm';

describe('getProfileForm.test', () => {
    const data = {
        first: 'black',
        last: 'dark',
        age: 23,
        currency: Currency.USD,
        city: '1234',
        username: '1234',
        country: Country.Kyrgyzstan,
    };
    test('should return', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };

        expect(getProfileFrom(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileFrom(state as StateSchema)).toEqual(undefined);
    });
});
