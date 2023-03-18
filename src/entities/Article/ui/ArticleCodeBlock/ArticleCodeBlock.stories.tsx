import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleCodeBlock } from './ArticleCodeBlock';

export default {
    title: 'entities/ArticleCodeBlock',
    component: ArticleCodeBlock,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCodeBlock>;

const Template: ComponentStory<typeof ArticleCodeBlock> = (args) => <ArticleCodeBlock {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
