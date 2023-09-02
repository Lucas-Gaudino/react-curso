import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <div className='cartWidget' style={{display: 'flex', alignItems: 'center'}}>
      <FontAwesomeIcon icon={faCartShopping} />
      <span  className="badge badge-primary ml-2">3</span>
    </div>
  );
}

export default CartWidget;