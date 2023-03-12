import { Profile, ValidateProfileErrors } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileErrors.NO_DATA];
    }
    const {
        first,
        last,
        age,
        city,
    } = profile;

    const errors: ValidateProfileErrors[] = [];

    if (!first || !last) {
        errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileErrors.INCORRECT_AGE);
    }
    if (!city) {
        errors.push(ValidateProfileErrors.INCORRECT_CITY);
    }

    return errors;
};
