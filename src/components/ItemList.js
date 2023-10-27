import React from 'react';
import Item from './Item';

const ItemList = ({ items, addToCart, setFilters, filters }) => {
  return (
    <>
      <div className="filters">
        <label>
            Stock mínimo:
            <input 
                type="number" 
                value={filters.stock} 
                onChange={e => setFilters({ ...filters, stock: Number(e.target.value) })} 
            />
        </label>
        <label>
            Precio máximo:
            <input 
                type="number" 
                value={filters.precio} 
                onChange={e => setFilters({ ...filters, precio: Number(e.target.value) })} 
            />
        </label>
     </div>

    <div className="row">
        {items.map(item => (
            <Item key={item.id} {...item} addToCart={addToCart} />
        ))}
    </div>
    </>
  );
};

export default ItemList;
