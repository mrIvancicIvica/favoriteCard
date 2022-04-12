import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const API = 'https://finalspaceapi.com/api/v0/character/';

export const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

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



  return (
    <CharactersContext.Provider
      value={{
        characters,
        handleFavorite,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
