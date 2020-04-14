import { createAction } from '@reduxjs/toolkit';

const increase = createAction('roulette/increase', (number: Number) => {
    return {
        payload: {
            value: number
        }
    }
})

export { increase }
export type RouletteActions = typeof increase