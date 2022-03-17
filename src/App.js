import './App.css';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';
import StarshipPage from './pages/StarshipPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<StarshipPage />} />
        <Route path='/starship' element={<StarshipDetails />} />
      </Routes>
    </div>
  );
}

export default App;
