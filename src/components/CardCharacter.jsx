import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const CardCharacter = ({ name, img, functionHart, toggle }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={name} />
        <CardMedia component='img' height='194' image={img} alt='Character' />

        <CardActions disableSpacing>

          <IconButton
            onClick={() => {
              functionHart();
            }}
            aria-label='add to favorites'
          >
            {toggle ? (
              <FavoriteIcon fontSize='large' />
            ) : (
              <FavoriteBorderIcon fontSize='large' />
            )}
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardCharacter;
