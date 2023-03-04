import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autoFocus
                placeholder={t('Enter username')}
                className={cls.input}
            />
            <Input
                placeholder={t('Enter password')}
                className={cls.input}
            />
            <Button className={cls.loginBtn}>
                {t('Login')}
            </Button>
        </div>
    );
};
