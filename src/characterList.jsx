import React from 'react';
import CharacterCard from './characterCard'; 
import './CharacterCard.css'; 

function CharacterList({ characters }) {
  return (
    <div className="character-grid">
      {characters.length > 0 ? (
        characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))
      ) : (
        <p>No se encontraron personajes.</p> 
      )}
    </div>
  );
}

export default CharacterList;
