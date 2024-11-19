import React, { useState, useEffect } from "react";
import CharacterList from './characterList.jsx'; 
import Filters from "./filter.jsx"; 
import  "./app.css";

  const App = () => {
    const [characters, setCharacters] = useState([]); 
    const [filteredCharacters, setFilteredCharacters] = useState([]); 
    const [filters, setFilters] = useState({ status: '', gender: '', species: '' }); 
  
   
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setCharacters(data.results); 
        setFilteredCharacters(data.results); 
      };
  
      fetchData();
    }, []);
  
    
    const handleFilterChange = (filterType, value) => {
      const newFilters = { ...filters, [filterType]: value }; 
      setFilters(newFilters); 
      applyFilters(newFilters); 
    };
  
  
    const applyFilters = (filters) => {
      let filtered = characters; 
  
      // Filtramos por estado
      if (filters.status) {
        filtered = filtered.filter((char) => char.status.toLowerCase() === filters.status.toLowerCase());
      }
  
      // Filtramos por género
      if (filters.gender) {
        filtered = filtered.filter((char) => char.gender.toLowerCase() === filters.gender.toLowerCase());
      }
  
      // Filtramos por especie
      if (filters.species) {
        filtered = filtered.filter((char) => char.species.toLowerCase() === filters.species.toLowerCase());
      }
  
      // Actualizamos los personajes filtrados
      setFilteredCharacters(filtered);
    };
  
    return (
      <div className="app">
        <h1>Personajes Rick And Morty</h1>
        <Filters onFilterChange={handleFilterChange} />
        <CharacterList characters={filteredCharacters} />
      </div>
    );
  };
  
  export default App;
  