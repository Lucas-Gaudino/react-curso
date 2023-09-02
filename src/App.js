import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a la Tienda N°1 de Juegos Digitales de zona sur." />
      
     
    </div>
  );
}

export default App;






