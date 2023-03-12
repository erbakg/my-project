import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/storybook.png';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        first: '1234',
        last: '1234',
        age: 23,
        currency: Currency.USD,
        city: '1234',
        username: '1234',
        avatar: AvatarImg,
        country: Country.Kyrgyzstan,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};
withError.decorators = [ThemeDecorator(Theme.DARK)];

export const withLoading = Template.bind({});
withLoading.args = {
    isLoading: true,
};
