import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const loginForm = useSelector(getLoginState);

    const {
        username, password, isLoading, error,
    } = loginForm;
    const { className } = props;

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUserName(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('authorization form')} />
            {
                error
                    ? <Text text={t('username password error')} theme={TextTheme.ERROR} />
                    : null
            }
            <Input
                autoFocus
                placeholder={t('Enter username')}
                className={cls.input}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                placeholder={t('Enter password')}
                className={cls.input}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                onClick={onLoginClick}
                disabled={isLoading}
                className={cls.loginBtn}
            >
                {t('Login')}
            </Button>
        </div>
    );
});
