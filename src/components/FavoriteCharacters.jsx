import { useContext } from 'react';
import { CharactersContext } from '../context/CharactersContext';
import CardCharacter from './CardCharacter';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const ListCharacter = () => {
  const { characters, handleFavorite } = useContext(CharactersContext);

  return (
    <Container sx={{ marginTop: 12 }}>
      <Grid container spacing={4}>
        {characters
          .filter((character) => character.favorite === true)
          .map((character) => (
            <CardCharacter
              functionHart={() => handleFavorite(character.id)}
              name={character.name}
              img={character.img_url}
              key={character.id}
              toggle={character.favorite}
            />
          ))}
      </Grid>
    </Container>
  );
};

export default ListCharacter;
