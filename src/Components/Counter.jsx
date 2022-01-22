import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DECREAMENT, INCREAMENT } from './Redux/types'

export default function Counter(){
    const [counter,setCounter] = React.useState(0)
    const countValue = useSelector(state => state.counter) //to get count value
    const dispatch = useDispatch() //to link action with reducer

    const handleIncreament = () => {
        dispatch({
            type : INCREAMENT
        })
    }

    const handleDecreament = () => {
        dispatch({
            type : DECREAMENT
        })
    }

    return(
        <div>
            <h3>{countValue}</h3>
            <button onClick={() => handleIncreament()}>increase</button>
            <button onClick={() => handleDecreament()}>decrease</button>
        </div>
    )
}