import React from 'react';

export default function Sidebar() {
  return (
  <div id='sideBar' style={{width : "30%",display : 'inline-block' ,height : '100%'}}>
      <div className='text-center' style={{background : 'gray',height : '100%'}}>
        <ul className='side-list'>
            <li><a href="#s">Login</a></li>
            <li><a href="#s">Who us</a></li>
            <li><a href="#s">Privacy</a></li>
            <li><a href="#s">Donate</a></li>
        </ul>
      </div>
    </div>
);
}
