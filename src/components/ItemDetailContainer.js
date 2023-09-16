import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ItemDetailContainer.css';  // Importa el archivo CSS

const ItemDetailContainer = () => {
  const { id } = useParams(); // Extraemos el 'id' de la URL
  const [itemDetail, setItemDetail] = useState(null);

  // Array de datos mockeados. En el futuro, esto puede ser reemplazado por datos de una API
  const mockDataArray = [
    { id: '1', title: 'God Of War', description: 'YO SOY EL MEJOR JUEGO DE ACCION DE LA HISTORIA', price: '$59.99' },
    { id: '2', title: 'HALO v', description: 'NADIE JUEGA GOD OF WAR! >:(', price: '$49.99' }
  ];

  useEffect(() => {
    // Buscamos en el array el ítem que coincide con el 'id' de la URL
    const foundItem = mockDataArray.find(item => item.id === id);
    // Establecemos ese ítem como el detalle actual
    setItemDetail(foundItem);
  }, [id]);

  return (
    <div className="container mt-4 item-detail-animation">
      {itemDetail ? (
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <h2 className="card-title display-4">{itemDetail.title}</h2> {/* Título más grande */}
            <p className="card-text lead">{itemDetail.description}</p> {/* Descripción más destacada */}
            <p className="card-text text-primary font-weight-bold display-6">Precio: {itemDetail.price}</p> {/* Precio resaltado */}
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
