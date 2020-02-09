import { combineReducers } from 'redux';
import { rouletteReducer } from './Roulette/reducer';

const reducers = combineReducers({
    rouletteReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;