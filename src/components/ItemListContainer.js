import React, { useState, useEffect } from 'react';
import Item from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({addToCart}) => {
  const [items, setItems] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    let url = "https://9588-2800-810-432-8605-f5c9-4977-a116-792.ngrok-free.app/api/productos";
    // Si hay un categoriaId en los parámetros, actualizamos la URL para filtrar por categoría.
    if (categoriaId) {
        console.log(categoriaId)
      url = `${url}/categoria/${categoriaId}`;
    }else{
        console.log("No categoria");
    }

    fetch(url, {
      headers: {
        "ngrok-skip-browser-warning": "any_value_you_like"
      }
    })
    .then(response => {
        console.log("URL a la que se está llamando:", url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
        console.log(data)
      setItems(data);
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
    });

  }, [categoriaId]);

  return (
 

    <div className="item-list container">
       
      <div className="row">
      {items.map(item => (
        <Item key={item.id} {...item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
