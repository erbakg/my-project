import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/GetCounterValue/GetCounterValue';
import { CounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(CounterActions.increment());
    };

    const decrement = () => {
        dispatch(CounterActions.decrement());
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
