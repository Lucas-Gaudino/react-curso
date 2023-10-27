import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { collection, addDoc } from "firebase/firestore";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Cart from './components/Cart'; 

import { db } from "./firebase/data";



function App() {
  const addProduct = async (product) => {
    try {
      const docRef = await addDoc(collection(db, "products"), product);
      console.log("Producto agregado con ID:", docRef.id);
    } catch (error) {
      console.error("Error al agregar producto: ", error);
    }
  }

  /*
    const newProduct = {
      id: 1,
      imagen_url: "url_de_tu_imagen",
      descripcion: "Descripción del juego",
      precio: 59.99,
      stock: 10,
      categoria_id: 3 // asumiendo que 3 es para PlayStation, por ejemplo
  };
  
  addProduct(newProduct);
  */
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
