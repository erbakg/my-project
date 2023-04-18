import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comments/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'hello world',
            user: {
                id: '1',
                username: 'vasya',
            },
        },
        {
            id: '2',
            text: 'hello world2',
            user: {
                id: '2',
                username: 'petya',
            },
        },
    ],
};

export const Dark = Template.bind({});
Dark.args = {
    comments: [
        {
            id: '1',
            text: 'hello world',
            user: {
                id: '1',
                username: 'vasya',
            },
        },
        {
            id: '2',
            text: 'hello world2',
            user: {
                id: '2',
                username: 'petya',
            },
        },
    ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {
    comments: [
        {
            id: '1',
            text: 'hello world',
            user: {
                id: '1',
                username: 'vasya',
            },
        },
        {
            id: '2',
            text: 'hello world2',
            user: {
                id: '2',
                username: 'petya',
            },
        },
    ],
    isLoading: true,
};
Loading.decorators = [ThemeDecorator(Theme.DARK)];

export const NoComments = Template.bind({});
NoComments.args = {
    comments: [],
};
