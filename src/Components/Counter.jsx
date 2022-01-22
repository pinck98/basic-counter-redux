import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {decreament, increament} from './Redux/counterSlice'

export default function Counter(){
    const countValue = useSelector(state => state.counter.counter) //to get count value
    console.log(countValue)
    const dispatch = useDispatch() //to link action with reducer

    return(
        <div>
            <h3>{countValue}</h3>
            <button onClick={() => dispatch(increament())}>increase</button>
            <button onClick={() =>dispatch(decreament())}>decrease</button>
        </div>
    )
}