import React from 'react';
import './CharacterCard.css'; 

const CharacterCard = ({ character }) => {
  return (
  
    <div className="character-card">
      <img 
        src={character.image} 
        alt={character.name} 
        className="character-card__image" 
      />
      <div className="character-card__info">
        <h3 className="character-card__name">{character.name}</h3>
        <p className="character-card__species">Especie: {character.species}</p>
        <p className="character-card__status">Estado: {character.status}</p>
        <p className="character-card__gender">Género: {character.gender}</p>
      </div>
    </div>
  );
};
export default CharacterCard;
