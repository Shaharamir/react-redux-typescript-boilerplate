
export const INCREASE =  'INCREASE';

export interface Increase {
    type: typeof INCREASE
    payload: {
        value: number
    }
}

export const increase = (value: number): Increase => {
    return {
        type: INCREASE,
        payload: {
            value
        }
    };
}

export type RouletteActions = Increase