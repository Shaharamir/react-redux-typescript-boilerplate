import { createAction } from '@reduxjs/toolkit';

const increase = createAction('roulette/increase', (number: number) => {
    return {
        payload: {
            value: number
        }
    }
})

export { increase }
export type RouletteActions = typeof increase
