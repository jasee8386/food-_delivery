import { useContext,useState } from 'react';
import { CartContext } from '../context/CartContext'
function ProductCard({ product }) {
    const { addToCart } = useContext(CartContext); 
    const [message, setMessage] = useState('');

  const handleAddToCart = () => {
    addToCart(product);
    setMessage(`${product.name} is added to cart!`);
    
    // Clear the message after 2 seconds
    setTimeout(() => setMessage(''), 2000);
  };
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
       <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-sm text-gray-500">₹{product.price}</p>

        <button 
        className="btn btn-secondary mt-4"
        onClick={handleAddToCart}
      >
        Add to Cart 🛒
      </button>
    {message && (
        <p className="text-green-600 mt-2 text-sm font-semibold">{message}</p>
      )}
    </div>
  );
}

export default ProductCard;
