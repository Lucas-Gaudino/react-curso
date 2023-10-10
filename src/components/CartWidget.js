import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = ({itemCount}) => {
  return (
    <div className='cartWidget' style={{display: 'flex', alignItems: 'center', fontSize: '20px'}}>
      <FontAwesomeIcon icon={faCartShopping} />
      <span  className="badge badge-primary ml-2">{itemCount}</span>
    </div>
  );
}

export default CartWidget;