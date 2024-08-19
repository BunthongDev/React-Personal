import './App.css';
import { 
   Route, 
   createBrowserRouter,
   createRoutesFromElements,
   RouterProvider
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';

// Layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';

// Pages/Help
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />  
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound/>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
