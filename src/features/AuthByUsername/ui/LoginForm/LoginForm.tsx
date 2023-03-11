import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const isLoading = useSelector(getLoginLoading);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);

    const { className, onSuccess } = props;

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

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch, password, username]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
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
        </DynamicModuleLoader>

    );
});

export default LoginForm;
