import { createSelector } from '@reduxjs/toolkit';
import { LoginSchema } from '../../types/LoginSchema';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginLoading = createSelector(
    getLoginState,
    (loginState: LoginSchema) => loginState?.isLoading || false,
);
