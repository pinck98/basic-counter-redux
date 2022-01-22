import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreamentAction, increamentAction } from './Redux/Actions/counterActions'

export default function Counter(){
    const countValue = useSelector(state => state.counter.counter) //to get count value
    console.log(countValue)
    const dispatch = useDispatch() //to link action with reducer

    return(
        <div>
            <h3>{countValue}</h3>
            <button onClick={() => increamentAction(dispatch)}>increase</button>
            <button onClick={() => decreamentAction(dispatch)}>decrease</button>
        </div>
    )
}