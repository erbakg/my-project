import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleTextBlock } from './ArticleTextBlock';

export default {
    title: 'entities/ArticleTextBlock',
    component: ArticleTextBlock,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTextBlock>;

const Template: ComponentStory<typeof ArticleTextBlock> = (args) => <ArticleTextBlock {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
