import React from 'react'
import './index.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <img src='' alt="logo"/>
            <button className='icon-btn'><img src={process.env.PUBLIC_URL + '/images/sidebar-icon.png'} alt='sidebar' className='icon'/></button>
        </div>
        <div className='navbar-right'>
            <button className='icon-btn'><img src={process.env.PUBLIC_URL + '/images/moon-icon.png'} alt='moon' className='icon'/></button>
            <button className='icon-btn'><img src={process.env.PUBLIC_URL + '/images/notification-icon.png'} alt='notifications' className='icon'/></button>
            <button className='icon-btn'><img src={process.env.PUBLIC_URL + '/images/language-icon.jpg'} alt='language' className='icon'/></button>
            <button className='icon-btn'><img src='' alt='avator' className='icon'/></button>
        </div>
    </div>
  )
}

export default Navbar