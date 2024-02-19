import React from 'react'
import './index.css'

const NavigationBar = () => {
  return (
    <div className='sidebar'>
    <div>
        <img src={process.env.PUBLIC_URL + '/images/dashboard-icon.png'} alt='dashboard' className='sidebar-icon'/>
        <p>Dashboard</p>
    </div>
    <div>
        <img src={process.env.PUBLIC_URL + '/images/inventory-icon.jpg'} alt='inventory' className='sidebar-icon'/>
        <p>Inventory</p>
    </div>
    <div className='selected-menu'>
        <img src={process.env.PUBLIC_URL + '/images/orders-icon.png'} alt='orders' className='sidebar-icon'/>
        <p>Orders</p>
    </div>
    <div>
        <img src={process.env.PUBLIC_URL + '/images/shipping-icon.png'} alt='shipping' className='sidebar-icon'/>
        <p>Shipping</p>
    </div>
    <div>
        <img src={process.env.PUBLIC_URL + '/images/channel-icon.jpg'} alt='channel' className='sidebar-icon'/>
        <p>Channel</p>
    </div>
    </div>
  )
}

export default NavigationBar