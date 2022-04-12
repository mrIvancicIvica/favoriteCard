import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link style={{ color: 'white', textDecoration: 'none' }} to='/'>
              Favorites App
            </Link>
          </Typography>
          <Link
            style={{ color: 'white', textDecoration: 'none' }}
            to='favorites'
          >
            <Button color='inherit'>Favorites List</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
