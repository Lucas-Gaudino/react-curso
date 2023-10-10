import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ItemDetailContainer.css';  // Importa el archivo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import mediosPagos from '../medios.jpg';

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
            <h3 className="card-title mb-5 display-6">{itemDetail.descripcion}</h3>

            <div className="d-flex" >
              <div>
                <img src={itemDetail.imagenUrl} alt={itemDetail.descripcion} className="card-img-top item-image item-detail-image"/>
              </div>
              <div className="descDetails ml-3">
              <p className="card-text ">
              <p className="card-text text-primary font-weight-bold display-6">${itemDetail.precio}.00 USD</p> {/* Precio resaltado */}
              
                <FontAwesomeIcon className="mr-1" icon={faAddressCard}/>
                3 cuotas sin interés de ${itemDetail.precio/3}.00 USD</p> 
                <p className="card-text ">
                <FontAwesomeIcon className="mr-1" icon={faCreditCard}/>
                20% de descuento pagando con Transferencia bancaria / Dinero en cuenta Mercadopago / Dinero en cuenta Billeteras virtuales
                </p>
                <img className="card-image" src={mediosPagos} alt="medios de pago" width="250" height="100"/>
               <div className="divider"> </div>
              <button 
              className='btn btn-primary position-relative ml-1 p-2' style={{fontSize: '20px', width: '100'}}
              onClick={() => addToCart(itemDetail, 1)}
              >
                Añadir al carrito 
              <FontAwesomeIcon className="ml-1" icon={faCartPlus} />
              
              </button>
              </div>
            </div>
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
