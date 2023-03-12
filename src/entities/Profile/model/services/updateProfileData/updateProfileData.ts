import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileFrom } from '../../selectors/getProfileFrom/getProfileForm';
import { Profile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, { extra, rejectWithValue, getState }) => {
        const formData = getProfileFrom(getState());
        try {
            const response = await extra.api.put<Profile>('/profile', formData);
            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
