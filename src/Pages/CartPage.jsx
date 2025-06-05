import { useContext, useEffect, useState  } from 'react';
import { CartContext } from '../context/CartContext';

function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
const [weather, setWeather] = useState("Sunny");
 useEffect(() => {
    const storedWeather = localStorage.getItem("weather") || "Sunny";
    setWeather(storedWeather);
  }, []);
 const totalPrice = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);


  if (cartItems.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty 😢</h2>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
       {/* Weather delay warning */}
      {weather === "Rainy" && (
        <div className="mb-4 bg-yellow-100 border border-yellow-300 text-yellow-800 p-4 rounded">
          ⚠️ Due to rainy weather, delivery might be delayed by 15 minutes.
        </div>
      )}
      <div className="grid gap-4">
        {cartItems.map((item, index) => (
          <div key={index} className="card card-side bg-base-100 shadow flex items-center p-4 justify-between">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">₹{item.price}</p>
              </div>
            </div>
            <button
              className="btn btn-error btn-sm"
              onClick={() => removeFromCart(item.id)}
            >
              ❌ Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <h3 className="text-xl font-bold">Total: ₹{totalPrice}</h3>
        <button className="btn btn-warning" onClick={clearCart}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default CartPage;
