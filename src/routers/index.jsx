import {  Routes, Route } from 'react-router-dom';
import ListCharacter from '../components/ListCharacters';
import FavoriteCharacters from '../components/FavoriteCharacters';

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<ListCharacter />} />
      <Route path='favorites' element={<FavoriteCharacters />} />
    </Routes>
  );
};

export default index;
