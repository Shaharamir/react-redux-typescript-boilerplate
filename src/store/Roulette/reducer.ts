import produce from 'immer'
import { RouletteActions, INCREASE } from './actions';

export interface RouletteState {
    number: number;
}

const rouletteState: RouletteState = {
    number: 0,
}

export const rouletteReducer = (state = rouletteState, action: RouletteActions): RouletteState => {
    return produce(state, draft => {
        switch(action.type) {
            case INCREASE: {
                draft.number += action.payload.value;
                break;
            };

            default: {
                return draft
            }
        }
    })
}