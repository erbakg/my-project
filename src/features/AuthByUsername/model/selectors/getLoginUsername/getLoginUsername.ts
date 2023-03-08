import { createSelector } from '@reduxjs/toolkit';
import { LoginSchema } from '../../types/LoginSchema';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginUsername = createSelector(
    getLoginState,
    (loginState: LoginSchema) => loginState?.username || '',
);
