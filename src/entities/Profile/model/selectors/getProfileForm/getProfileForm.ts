import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileFrom = (state: StateSchema) => state.profile?.form;
