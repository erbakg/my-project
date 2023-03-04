import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from '../../types/CounterSchema';
import { getCounter } from '../GetCounter/GetCounter';

export const getCounterValue = createSelector(
    getCounter,
    (counter:CounterSchema) => counter.value,
);
