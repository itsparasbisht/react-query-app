import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { SuperHeroes } from './components/SuperHeroes';
import { RQSuperHeroes } from './components/RQSuperHeroes';
import { Home } from './components/Home';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { RQSuperHero } from './components/RQSuperHero';
import ParallelQueries from './components/ParallelQueries';
import DynamicParallelQueries from './components/DynamicParallelQueries';
import DependetQueries from './components/DependetQueries';
import PaginatedQueries from './components/PaginatedQueries';

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
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
            <Route path='/rq-dependent' element={<DependetQueries email='paras@mail.in' />} />
            <Route path='/rq-super-heroes/:heroId' element={<RQSuperHero />} />
            <Route path='/rq-parallel' element={<ParallelQueries />} />
            <Route path='/rq-dynamic-parallel' element={<DynamicParallelQueries heroIDs={[1,3]} />} />
            <Route path='/super-heroes' element={<SuperHeroes />} />
            <Route path='/rq-super-heroes' element={<RQSuperHeroes />} />
            <Route path='/rq-paginated' element={<PaginatedQueries />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
