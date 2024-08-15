import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home';
import AboutUs from './components/about';
import Users from './components/users';


function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} /> 
      <Route path='/about' element={<AboutUs />} /> 
      <Route path='/users' element={<Users />} /> 


    </Routes>

  )
}

export default App
