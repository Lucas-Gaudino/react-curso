import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './components/Cart'; 

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        setCart(cart.map(item => item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ));
    } else {
      setCart([...cart, { ...product, quantity }]);  
    }
}
const removeFromCart = (productId) => {
  setCart(cart.filter(item => item.id !== productId));
}


return (
  <div className="App">
      <Router>
           <NavBar cart={cart} />
          <Routes>
            <Route path="/category/:categoriaId" element={<ItemListContainer addToCart={addToCart} />} />
              <Route path="/item/:id" element={<ItemDetailContainer addToCart={addToCart} />} />
              <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} />} />
              <Route index path="/" element={<ItemListContainer addToCart={addToCart} />} />
          </Routes>
      </Router>
  </div>
);


}

export default App;
