import { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cart, removeItemFromCart } = useContext(CartContext);

  return (
    <div className="p-5 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-5">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="space-y-3">
          {cart.map(item => (
            <li key={item.id} className="p-3 bg-gray-200 rounded-lg flex justify-between items-center">
              <span>{item.name} - ${item.price}</span>
              <button
                onClick={() => removeItemFromCart(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

// This component uses the CartContext to access the cart state and the removeItemFromCart function.
 // It displays the items in the cart and provides a button to remove an item from the cart.