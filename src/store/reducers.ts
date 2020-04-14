import { combineReducers } from 'redux';
import { rouletteReducer } from './Roulette/reducer';

const rootReducer = combineReducers({
    rouletteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export { rootReducer };