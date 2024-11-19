import React from 'react';

const Filters = ({ onFilterChange }) => {
 
  const handleFilterChange = (e) => {
    const { name, value } = e.target; 
    onFilterChange(name, value); 
  };

  return (
    <div className="filters">
      <select name="status" onChange={handleFilterChange}>
        <option value="">Estado</option>
        <option value="alive">Vivo</option>
        <option value="dead">Muerto</option>
        <option value="unknown">Desconocido</option>
      </select>

      <select name="gender" onChange={handleFilterChange}>
        <option value="">Género</option>
        <option value="male">Masculino</option>
        <option value="female">Femenino</option>
        <option value="genderless">Sin género</option>
        <option value="unknown">Desconocido</option>
      </select>

      <select name="species" onChange={handleFilterChange}>
        <option value="">Especie</option>
        <option value="Human">Humano</option>
        <option value="Alien">Extraterrestre</option>
        <option value="Robot">Robot</option>
        <option value="Mythological Creature">Criatura mitológica</option>
      </select>
    </div>
  );
};

export default Filters;
