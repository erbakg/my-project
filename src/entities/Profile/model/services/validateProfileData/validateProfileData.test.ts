import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileErrors } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

jest.mock('axios');

const data = {
    first: 'black',
    last: 'dark',
    age: 23,
    currency: Currency.USD,
    city: '1234',
    username: '1234',
    country: Country.Kyrgyzstan,
};

describe('validateProfileData.test', () => {
    test('success validate', () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without name and lastname', () => {
        const result = validateProfileData({ ...data, first: '', last: '' });

        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_USER_DATA,
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
    });

    test('incorrect city', async () => {
        const result = validateProfileData({ ...data, city: '' });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_CITY]);
    });

    test('incorrect city', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_USER_DATA,
            ValidateProfileErrors.INCORRECT_AGE,
            ValidateProfileErrors.INCORRECT_CITY,
        ]);
    });
});
