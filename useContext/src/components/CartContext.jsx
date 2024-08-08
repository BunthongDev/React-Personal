import { createContext, useState } from 'react';

// Create the context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
 