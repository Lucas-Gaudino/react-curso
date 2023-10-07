// Checkout.js
import React from 'react';

const Checkout = ({ onCheckout }) => {
  return (
    <div className="mt-4 border p-4 rounded">
      <h4>Finalizar compra</h4>
      <p>Ingrese sus datos:</p>
      <input className="form-control" placeholder="Nombre completo" />
      <input className="form-control mt-2" placeholder="Correo electrónico" />
      <input className="form-control mt-2" placeholder="Dirección" />
      
      <h5 className="mt-3">Detalles del pago</h5>
      <input className="form-control" placeholder="Nombre en la tarjeta" />
      <input className="form-control mt-2" placeholder="Número de tarjeta" />
      <div className="d-flex justify-content-between mt-2">
        <input className="form-control w-50 mr-2" placeholder="MM/YY" />
        <input className="form-control w-50" placeholder="CVC" />
      </div>
      
      <button className="btn btn-primary mt-3 w-100" onClick={onCheckout}>
        Confirmar compra
      </button>
    </div>
  );
};

export default Checkout;
