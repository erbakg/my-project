import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
    {
        value: Country.Kyrgyzstan, content: Country.Kyrgyzstan,
    },
    {
        value: Country.Kazahstan, content: Country.Kazahstan,
    },
    {
        value: Country.Ukraine, content: Country.Ukraine,
    },
    {
        value: Country.USA, content: Country.USA,
    },
    {
        value: Country.German, content: Country.German,
    },
];

export const CountrySelect = (props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;
    const { t } = useTranslation('profile');

    const onChangeHandler = (value: string) => {
        onChange?.(value as Country);
    };

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Provide country')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
};
