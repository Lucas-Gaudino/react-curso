import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../firebase/data"; // Asegúrate de que esta sea la ruta correcta
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ addToCart }) => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setItemDetail({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchItem();
  }, [id]);

  return (
    <div className="container mt-4 item-detail-animation">
      {itemDetail ? <ItemDetail item={itemDetail} addToCart={addToCart} /> : <div>Cargando...</div>}
    </div>
  );
};

export default ItemDetailContainer;
