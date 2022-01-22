import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreamentAction, increamentAction } from './Redux/counterActions'
import { DECREAMENT, INCREAMENT } from './Redux/types'

export default function Counter(){
    const [counter,setCounter] = React.useState(0)
    const countValue = useSelector(state => state.counter) //to get count value
    const dispatch = useDispatch() //to link action with reducer


    return(
        <div>
            <h3>{countValue}</h3>
            <button onClick={() => dispatch(increamentAction())}>increase</button>
            <button onClick={() => dispatch(decreamentAction())}>decrease</button>
        </div>
    )
}