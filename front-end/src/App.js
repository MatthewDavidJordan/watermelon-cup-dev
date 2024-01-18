import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Teams } from './pages/Teams';
import { Standings } from './pages/Standings';
import { Matches } from './pages/Matches';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/teams" element={ <Teams/> } />
      <Route path="/standings" element={<Standings/>} />
      <Route path="/matches" element={<Matches/>} />
    </Routes>
    
  );
}

export default App;
