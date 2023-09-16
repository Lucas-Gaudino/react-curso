import React from 'react';
import { Link } from 'react-router-dom';
import '../Item.css';  // Importa el archivo CSS

const Item = ({ id, name, description, price }) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100 item-animation">
            <Link to={`/item/${id}`} className="card-link text-decoration-none text-dark">
              <div className="card-body">
                <h5 className="card-title display-5">{name}</h5>
                <p className="card-text lead">{description}</p>
                <p className="card-text font-weight-bold">Precio: {price}</p>
              </div>
            </Link>
          </div>
        </div>
    );
    
}

export default Item;
