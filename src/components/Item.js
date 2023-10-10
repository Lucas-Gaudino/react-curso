import React from 'react';
import { Link } from 'react-router-dom';
import '../Item.css'; 
/*importar bootsrap */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


const Item = ({ id, descripcion, precio, imagenUrl, stock, addToCart, product }) => {
    return (
        <div className="col-md-4 mb-4">

        <div className="item card shadow-sm">
          <img src={imagenUrl} alt={descripcion} className="card-img-top item-image"/>

          <div className="card-body">
            <h5 className="card-title">{descripcion}</h5>
            <p className="card-text price">${precio}.00</p>
            
            <Link to={`/item/${id}`} className="btn btn-primary">Ver detalles</Link>
            <button 
            className='btn btn-primary position-relative ml-1'
            onClick={() => addToCart({id, descripcion, precio, imagenUrl, stock}, 1)}
            >
             <FontAwesomeIcon icon={faCartPlus} />
            
            </button>
            <p className="card-text stock">Stock: {stock}</p>
          </div>

        </div>

      </div>
    );
  }
  
  


export default Item;
