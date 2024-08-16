import './App.css';
import { Routes, Route, BrowserRouter, Link, NavLink } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (  
    <>
    
    <header>
      <nav>
        <h1 className='text-3xl mb-2 '>Job Router</h1>
        <Link className='mr-5 bg-blue-500 p-2 rounded-md' to="/">Home</Link>
        <NavLink className='mr-5 bg-blue-500 p-2 rounded-md' to="/about">About</NavLink>

        
      </nav>


    </header>

      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    
    </>

  );
}

export default App;
