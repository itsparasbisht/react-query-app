import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { SuperHeroes } from './components/SuperHeroes';
import { RQSuperHeroes } from './components/RQSuperHeroes';
import { Home } from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
          </ul>
          <ul>
            <li><Link to='/super-heroes'>Traditional Super Heroes</Link></li>
          </ul>
          <ul>
            <li><Link to='/rq-super-heroes'>RQ Super Heroes</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path='super-heroes' element={<SuperHeroes />} />
          <Route path='rq-super-heroes' element={<RQSuperHeroes />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;