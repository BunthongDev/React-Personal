import { useContext } from 'react';
import { CartContext } from './CartContext';

const ProductList = () => {
  const { addItemToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-5">Products</h2>
      <ul className="space-y-3">
        {products.map(product => (
          <li key={product.id} className="p-3 bg-gray-200 rounded-lg flex justify-between items-center">
            <span>{product.name} - ${product.price}</span>
            <button
              onClick={() => addItemToCart(product)}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
