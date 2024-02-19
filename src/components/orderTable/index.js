import React, { useState } from 'react';
import './index.css'; // Make sure to create an OrderTable.css file with the styles
import { type } from '@testing-library/user-event/dist/type';



const OrderTable = () => {
  const [selectedMenu, setSelectedMenu] = useState('Pending');

  const orders = [
    { add: '+', selectbox: <input type='checkbox'/>, channel: <img src={process.env.PUBLIC_URL + '/images/shoppify.jpg'} className='shoppify-img' alt='shoppify'/>, orderNo: '#TKN20203754', orderDate: '2022-05-04', city: 'Lucknow', customerName: 'Abhishek Dixit', orderValue: '0.00', status: 'Pending' },
    { add: '+', selectbox: <input type='checkbox'/>, channel: <img src={process.env.PUBLIC_URL + '/images/shoppify.jpg'} className='shoppify-img' alt='shoppify'/>, orderNo: '#TKN20203754', orderDate: '2022-05-04', city: 'Lucknow', customerName: 'Abhishek Dixit', orderValue: '0.00', status: 'Pending' },
    { add: '+', selectbox: <input type='checkbox'/>, channel: <img src={process.env.PUBLIC_URL + '/images/shoppify.jpg'} className='shoppify-img' alt='shoppify'/>, orderNo: '#TKN20203754', orderDate: '2022-05-04', city: 'Lucknow', customerName: 'Abhishek Dixit', orderValue: '0.00', status: 'Pending' },
  ];

  const tabButtons = ['Pending', 'Accepted', 'AWB Created', 'Ready to Ship', 'Shipped', 'Completed', 'Cancelled']


  return (
    <div className="container">
      <header className="header">
        <h1>Orders</h1>
      </header>
      <nav className="navigation">
        {tabButtons.map((button, index) => (
          <button className={`tab ${selectedMenu === button ? 'selected' : ''}`} key={index} onClick={()=> setSelectedMenu(button)}>{button}</button>
        ))
        }
      </nav>
      <div className="orderTable">
        <div className='order-options'>
          <button type='button'>Import Orders</button>
          <button type='button'>Accept</button>
          <button type='button'>Print</button>
        </div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th><input type='checkbox'/></th>
              <th>Channel</th>
              <th>Order No</th>
              <th>Order Date</th>
              <th>City</th>
              <th>Customer Name</th>
              <th>Order Value</th>
              <th>Status</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.add}</td>
                <td>{order.selectbox}</td>
                <td>{order.channel}</td>
                <td style={{color: 'blue'}}>{order.orderNo}</td>
                <td>{order.orderDate}</td>
                <td>{order.city}</td>
                <td>{order.customerName}</td>
                <td>{order.orderValue}</td>
                <td><span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></td>
                <td><button className="actionButton">Actions</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
