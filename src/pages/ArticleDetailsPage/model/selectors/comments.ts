import { StateSchema } from 'app/providers/StoreProvider';

export const articeDetailsCommentsIsLoading = (state: StateSchema) => (
    state?.articleDetailsComments?.isLoading
);
export const articeDetailsCommentsError = (state: StateSchema) => (
    state?.articleDetailsComments?.error
);
