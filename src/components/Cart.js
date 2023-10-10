import React from 'react';
import Checkout from './Checkout';
import Swal from 'sweetalert2';


const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  const handleCheckout = () => {
    // Simular el tiempo de espera de una pasarela de pago
    setTimeout(() => {
      Swal.fire({
        title: 'Compra exitosa',
        text: 'Gracias por tu compra!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      // Aquí puedes hacer otras acciones como limpiar el carrito
    }, 2000);
  };
  
  
  
  
  return (
    <div className="container mt-4">
      <h2>Tu carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>{item.descripcion}</td>
                  <td>${item.precio}</td>
                  <td>{item.quantity}</td>
                  <td>${item.precio * item.quantity}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right">
            <h4>Total a pagar: ${total}</h4>
          </div>
          {/* Integrando el Checkout aquí */}
          <Checkout onCheckout={handleCheckout} />
        </div>
      )}
    </div>
  );
};

export default Cart;
