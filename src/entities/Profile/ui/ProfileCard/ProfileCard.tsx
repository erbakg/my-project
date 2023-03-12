import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?:(value: string) => void;
    onChangeLastname?:(value: string) => void;
    onChangeAge?:(value: string) => void;
    onChangeCity?:(value: string) => void;
    onChangeUsername?:(value: string) => void;
    onChangeAvatar?:(value: string) => void;
    onChangeCurrency?:(value: Currency) => void;
    onChangeCountry?:(value: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Loading filed')}
                    text={t('Loading to reload')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar
                    ? (
                        <div className={cls.avatarWrapper}>
                            <Avatar src={data?.avatar} />
                        </div>
                    )
                    : null}

                <Input
                    readonly={readonly}
                    value={data?.first}
                    onChange={onChangeFirstname}
                    placeholder={t('Your name')}
                    className={cls.input}
                />
                <Input
                    readonly={readonly}
                    onChange={onChangeLastname}
                    value={data?.last}
                    placeholder={t('Your lastname')}
                    className={cls.input}
                />
                <Input
                    readonly={readonly}
                    onChange={onChangeAge}
                    value={data?.age}
                    placeholder={t('Your age')}
                    className={cls.input}
                />
                <Input
                    readonly={readonly}
                    onChange={onChangeCity}
                    value={data?.city}
                    placeholder={t('Your city')}
                    className={cls.input}
                />
                <Input
                    readonly={readonly}
                    onChange={onChangeUsername}
                    value={data?.username}
                    placeholder={t('Your username')}
                    className={cls.input}
                />
                <Input
                    readonly={readonly}
                    onChange={onChangeAvatar}
                    value={data?.avatar}
                    placeholder={t('Set link to avatar')}
                    className={cls.input}
                />
                <CurrencySelect
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                    className={cls.input}
                />
                <CountrySelect
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
