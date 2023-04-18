import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { profileReducer } from 'entities/Profile';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slices/addCommentFormSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { articeDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/articeDetailsCommentsSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articeDetailsCommentsReducer,
};

// eslint-disable-next-line operator-linebreak
export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) =>
     // eslint-disable-next-line implicit-arrow-linebreak
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...asyncReducers, ...defaultAsyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        );
