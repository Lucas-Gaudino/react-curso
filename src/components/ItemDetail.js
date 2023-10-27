import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faCreditCard, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import mediosPagos from '../medios.jpg'; // Ruta de tu imagen
//importar estilos 
import '../ItemDetailContainer.css';


const ItemDetail = ({ item, addToCart }) => {
  const itemDetail = item;
  return (
    <div className="container mt-4 item-detail-animation">
      
      {itemDetail ? (
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <h3 className="card-title mb-5 display-6">{itemDetail.descripcion}</h3>

            <div className="d-flex" >
              <div>
                <img src={itemDetail.imagen_url} alt={itemDetail.descripcion} className="card-img-top item-image item-detail-image"/>
              </div>
              <div className="descDetails ml-3">
              <p className="card-text ">
              <p className="card-text text-primary font-weight-bold display-6">${itemDetail.precio}.00 USD</p> {/* Precio resaltado */}
              
                <FontAwesomeIcon className="mr-1" icon={faAddressCard}/>
                3 cuotas sin interés de ${(itemDetail.precio / 3).toFixed(2)} USD</p>

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
};

export default ItemDetail;
