import React from 'react';
import Item from './Item';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ items }) => {
  const { id: category } = useParams(); // Obtiene la categoría desde la URL

  // Si hay una categoría en la URL, filtra los ítems por esa categoría. Si no, muestra todos los ítems.
  const filteredItems = category ? items.filter(item => item.category === category) : items;

  return (
    <div className="item-list">
      {filteredItems.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ItemListContainer;
