import React from 'react';
import './index.css'; // Make sure to create an OrderTable.css file with the styles

const orders = [
  // Add your orders here
  { orderNo: '#TKN20203754', orderDate: '2022-05-04', city: 'Lucknow', customerName: 'Abhishek Dixit', orderValue: '0.00', status: 'Pending' },
  // ... more orders
];

const OrderTable = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Dashboard</h1>
      </header>
      <nav className="navigation">
        {/* Tab buttons */}
        <button className="tab">Pending</button>
        {/* ... more tabs */}
      </nav>
      <div className="orderTable">
        <table>
          <thead>
            <tr>
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
                <td>{order.orderNo}</td>
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
