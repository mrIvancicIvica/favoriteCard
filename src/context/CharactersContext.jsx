import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const API = 'https://finalspaceapi.com/api/v0/character/';

export const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [favCharacter, setFavCharacter] = useState([]);
  console.log(' characters', characters);

  const handleFavorite = (id) => {
    const allItems = [...characters];
    const itemIndex = allItems.findIndex((item) => item.id === id);
    allItems[itemIndex].favorite = !allItems[itemIndex].favorite;
     setCharacters(allItems);
  };



  useEffect(() => {
    const getCharacters = async () => {
       await axios
        .get(API)
        .then((response) => {
          const updatedResponse = response.data.map((favCh) => ({
            ...favCh,
            favorite: false,
          }));
          setCharacters(updatedResponse);
        })
        .catch((error) => console.log(error));
    };
    getCharacters();
  }, []);

  const addFavCharacter = (character) => {
    setFavCharacter([...favCharacter, character]);
  };

  const removeFavCharacter = (character) => {
    setFavCharacter(favCharacter.filter((char) => char.id !== character.id));
  };

  return (
    <CharactersContext.Provider
      value={{
        characters,
        addFavCharacter,
        favCharacter,
        removeFavCharacter,
        handleFavorite,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
