import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/data';


const Checkout = ({ onCheckout }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    cardName: '',
    cardNumber: '',
    cardDate: '',
    cardCVC: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleCheckout = async () => {
    const { fullName, email, address, cardName, cardNumber, cardDate, cardCVC } = formData;

    
    if (!fullName || !email || !address || !cardName || !cardNumber || !cardDate || !cardCVC) {
      Swal.fire('Error', 'Por favor, rellene todos los campos.', 'error');
      return;
    }

   
    if (!validateEmail(email)) {
      Swal.fire('Error', 'Por favor, ingrese un correo electrónico válido.', 'error');
      return;
    }


    if (cardNumber.length < 16 || isNaN(cardNumber)) {
      Swal.fire('Error', 'Número de tarjeta inválido.', 'error');
      return;
    }

    try {
      // Añadir los datos a la colección 'ordenes'
      const docRef = await addDoc(collection(db, 'ordenes'), {
        ...formData,
        fecha: new Date()
      });
  
      Swal.fire('Compra Exitosa', `Gracias por tu compra! Tu número de operación es: ${docRef.id}`, 'success');
    } catch (error) {
      
      Swal.fire('Error', 'Hubo un problema al procesar tu compra.', 'error');
    }

  
  };

  return (
    <div className="mt-4 border p-4 rounded">
      <h4>Finalizar compra</h4>
      <p>Ingrese sus datos:</p>
      <input className="form-control" placeholder="Nombre completo" name="fullName" value={formData.fullName} onChange={handleChange} />
      <input className="form-control mt-2" placeholder="Correo electrónico" name="email" value={formData.email} onChange={handleChange} />
      <input className="form-control mt-2" placeholder="Dirección" name="address" value={formData.address} onChange={handleChange} />
      
      <h5 className="mt-3">Detalles del pago</h5>
      <input className="form-control" placeholder="Nombre en la tarjeta" name="cardName" value={formData.cardName} onChange={handleChange} />
      <input className="form-control mt-2" placeholder="Número de tarjeta" name="cardNumber" value={formData.cardNumber} onChange={handleChange} />
      <div className="d-flex justify-content-between mt-2">
        <input className="form-control w-50 mr-2" placeholder="MM/YY" name="cardDate" value={formData.cardDate} onChange={handleChange} />
        <input className="form-control w-50" placeholder="CVC" name="cardCVC" value={formData.cardCVC} onChange={handleChange} />
      </div>
      
      <button className="btn btn-primary mt-3 w-100" onClick={handleCheckout}>
        Confirmar compra
      </button>
    </div>
  );
};

export default Checkout;
