import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/GetCounterValue/GetCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useAppDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-button" onClick={increment}>
                {t('increment')}
            </Button>
            <Button data-testid="decrement-button" onClick={decrement}>
                {t('decrement')}
            </Button>
        </div>
    );
};
