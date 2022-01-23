import React from 'react'
import {useSelector} from 'react-redux'

export default function Header(){
    const {name} = useSelector(state => state.user)
    return(
        <div id="header">
           <div className="row text-start align-items-center ps-5 pe-5 pt-4 pb-4" style={{background : '#9e2727'}}>
               <div className='col-6 fs-2 fw-bold'><p>IM WEB</p></div>
               <div className='col-6 text-end'><p>Hello {name}</p></div>
           </div>
        </div>
    )
}