import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Szyfr from './components/Szyfr/Szyfr';
import Deszyfr from './components/Deszyfr/Deszyfr';

function App() {

 return (

    <Router>
      <Routes>
        <Route path='/deszyfr' element={<Deszyfr />} />
        <Route path='/szyfr' element={<Szyfr />} />
        <Route path='/' exact element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;
