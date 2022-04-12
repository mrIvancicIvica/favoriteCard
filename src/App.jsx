import './App.css';
import Routers from './routers';
import AppBar from './components/Header';

const App = () => {
  return (
    <div className='App'>
      <AppBar />
      <Routers />
    </div>
  );
};

export default App;
