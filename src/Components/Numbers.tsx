import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { increase } from '../store/Roulette/actions';

interface props {}

const Numbers: React.FC<props> = (props)  => {

    const dispatch = useDispatch();

    const number = useSelector((state: RootState) => state.rouletteReducer.number);


    return (
        <div>
            <p>{number}</p>
            <button onClick={() => dispatch(increase(5))}>increase</button>
        </div>
    )
}

export default Numbers;