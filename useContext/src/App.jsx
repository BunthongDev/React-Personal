import './App.css'
import ComponentA from './components/ComponentA'
import { ThemeProvider } from './components/ThemeContext';
import ThemeToggler from './components/ThemeToggler';

import { CartProvider } from './components/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {


  return (
    <>
      <ComponentA />

    {/* DarkMod and Light Mode */}
      <ThemeProvider>
      <div className="App min-h-screen flex items-center justify-center">
        <ThemeToggler />
      </div>
    </ThemeProvider>

    {/* shopping cart feature */}

    <CartProvider>
      <div className="App min-h-screen flex items-center justify-center space-x-10 p-10">
        <ProductList />
        <Cart />
      </div>
    </CartProvider>

    </>

    

  )
}

export default App
