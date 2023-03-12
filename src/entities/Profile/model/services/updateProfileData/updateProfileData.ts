import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileFrom } from '../../selectors/getProfileForm/getProfileForm';
import { Profile, ValidateProfileErrors } from '../../types/profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
Profile,
 void,
 ThunkConfig<ValidateProfileErrors[]>
 >(
     'profile/updateProfileData',
     async (_, { extra, rejectWithValue, getState }) => {
         const formData = getProfileFrom(getState());
         const errors = validateProfileData(formData);

         if (errors.length) {
             return rejectWithValue(errors);
         }

         try {
             const response = await extra.api.put<Profile>('/profile', formData);
             if (!response.data) {
                 throw new Error();
             }
             return response.data;
         } catch (error) {
             return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
         }
     },
 );
