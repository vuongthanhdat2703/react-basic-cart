import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Cart from './components/cart/cart';
import Product from './components/product/product';
import { products } from './mocks/product';

function App() {
  //State
  const [Products, setProducts] = useState([]);
  // Use Effect
  useEffect(() => {
    setProducts(products)
  }, [])
  const show = () => {
    const result = Products.map((item, index) => (
      <div className='col'>< Product item={item} /></div>
    ))
    return result
  }

  return (
    <>
      <Cart />
      <div className='row'>
        {show()}
      </div>
    </>
  );
}

export default App;
