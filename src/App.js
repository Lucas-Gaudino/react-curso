import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const itemsMock = [
    { id: '1', name: 'God of War', description: 'EL mejor juego de accion de la historia mundial', price: '$59.99', category: 'playstation' },
    { id: '2', name: 'HALO V', description: 'El mejor juego de accion de la historia, no le hagan caso a GOD OF WAR >:C', price: '$49.99', category: 'xbox' },
  ];

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer items={itemsMock} greeting="Bienvenido a la Tienda N°1 de Juegos Digitales de zona sur." />} />
          <Route path="/category/:id" element={<ItemListContainer items={itemsMock} />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
