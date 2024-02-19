import './App.css';
import OrderTable from './components/orderTable';
import Navbar from './components/navbar';
import NavigationBar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='order-view'>
        <NavigationBar/>
        <OrderTable />
      </div>
      
    </div>
  );
}

export default App;
