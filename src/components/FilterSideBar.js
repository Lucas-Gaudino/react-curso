import React from 'react';

const FilterSideBar = ({ onFilterChange }) => {
    const handleFilterChange = (event) => {
      const { name, value } = event.target;
      onFilterChange(name, value);
    };
  
    return (
      <div className="filter-sidebar">
        <h4>Filtros</h4>
        
        {/* Filtro basado en categoría */}
        <select name="category" onChange={handleFilterChange}>
          <option value="1">PlayStation</option>
          <option value="2">X-Box</option>
          <option value="3">PC</option>
          <option value="4">Nintendo</option>
        </select>
  
        {/* Filtro de Stock */}
        <div>
          <label>Stock mínimo:</label>
          <input type="number" name="stock" onChange={handleFilterChange} />
        </div>
  
        {/* Filtro de Precio */}
        <div>
          <label>Precio Máximo:</label>
          <input type="number" name="price" onChange={handleFilterChange} />
        </div>
      </div>
    );
  }
  


export default FilterSideBar;
