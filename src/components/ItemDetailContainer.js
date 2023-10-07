import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ItemDetailContainer.css';  // Importa el archivo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ItemDetailContainer = ({addToCart}) => {
  const { id } = useParams(); // Extraemos el 'id' de la URL
  const [itemDetail, setItemDetail] = useState();


  useEffect(() => {
    fetch(`https://f473-2800-810-432-8605-f5c9-4977-a116-792.ngrok-free.app/api/productos/detalle/${id}`, {
      headers: {
        "ngrok-skip-browser-warning": "any_value_you_like"
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setItemDetail(data);
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
    });
  }, [id]);


  return (
    <div className="container mt-4 item-detail-animation">
      {itemDetail ? (
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <h2 className="card-title display-4">{itemDetail.descripcion}</h2> {/* Título más grande */}
            <img src={itemDetail.imagenUrl} alt={itemDetail.descripcion} className="card-img-top item-image item-detail-image"/>
            <p className="card-text lead">{itemDetail.descripcion}</p> {/* Descripción más destacada */}
            <p className="card-text text-primary font-weight-bold display-6">Precio: {itemDetail.precio}</p> {/* Precio resaltado */}
            <button 
            className='btn btn-primary position-relative ml-1'
            onClick={() => addToCart(itemDetail, 1)}
            >
             <FontAwesomeIcon icon={faCartPlus} />
            
            </button>

          </div>
        </div>
      ) : (
        <div className="alert alert-info" role="alert">
          Cargando detalles del producto...
        </div>
      )}
    </div>
);


}
export default ItemDetailContainer;
