import './App.css';
import Cart from './components/cart/cart';
import Product from './components/product/product';

function App() {
  //State

  // Use Effect
  

  return (
    <>
      <Cart/>
      <div className='row'>
        <div className='col'><Product  /></div>
        <div className='col'><Product /></div>
        <div className='col'><Product /></div>
      </div>
    </>
  );
}

export default App;
