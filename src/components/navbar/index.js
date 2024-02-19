import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='navbar-left'>
            <img src='' alt="logo"/>
            <button className='sidebar-btn'>Sidebar</button>
        </div>
        <div className='navbar-right'>
            <button className='day-night-mode'><img src='' alt='moon'/></button>
            <button className='notifications-btn'><img src='' alt='notifications'/></button>
            <button className='language-change'><img src='' alt='language'/></button>
            <button className='avator-btn'><img src='' alt='avator'/></button>
        </div>
    </div>
  )
}

export default Navbar