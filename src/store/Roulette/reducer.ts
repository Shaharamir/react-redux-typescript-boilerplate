import produce from 'immer'
import { RouletteActions, increase } from './actions';
import { createReducer } from '@reduxjs/toolkit';

export interface RouletteState {
    number: number;
}

const rouletteState: RouletteState = {
    number: 0,
}

export const rouletteReducer = createReducer(rouletteState, {
    [increase as unknown as string]: (state, action) => {
        state.number += action.payload.value
        return state;
      },
})