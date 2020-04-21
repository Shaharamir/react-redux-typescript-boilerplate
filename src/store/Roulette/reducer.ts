import produce from 'immer'
import { RouletteActions, increase } from './actions';
import { createReducer } from '@reduxjs/toolkit';

export interface RouletteState {
    number: number;
}

const rouletteState: RouletteState = {
    number: 0,
}

export const rouletteReducer = createReducer(rouletteState, builder =>
    builder
        .addCase(increase, (state, action) => {
            state.number += action.payload.value
        })
)
