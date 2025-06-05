
import { useState, useEffect } from "react";

export default function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
 const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [weather, setWeather] = useState(localStorage.getItem("weather") || "Sunny");
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products") || "[]");
    setProducts(stored);
  }, []);

  const handleAdd = () => {
    if (!name || !price || !image || !category) {
      return alert("Please fill in all fields");
    }

    const newProduct = {
      id: Date.now(),
      name,
      price,
      image,
      category,
    };

    const updated = [...products, newProduct];
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));

    // Clear input fields
    setName("");
    setPrice("");
    setImage("");
    setCategory("");
  };

  const handleDelete = (id) => {
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  const handleWeatherChange = (e) => {
    const selected = e.target.value;
    setWeather(selected);
    localStorage.setItem("weather", selected);
  };
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product name"
          className="border p-2 rounded w-1/2"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="border p-2 rounded w-1/2"
        />
         <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
          className="border p-2 rounded"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded text-gray-400"
        >  <option value="">Select Category</option>
          <option value="Starters">Starters</option>
          <option value="Drinks">Drinks</option>
          <option value="Snacks">Fast Food</option>
          <option value="Meals">Meals</option>
          <option value="Desserts">Desserts</option>
        </select>
               <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-4 py-2 rounded col-span-1 md:col-span-2"
        >
          Add
        </button>
      </div>

 {/* Weather Control Section */}
      <div className="p-4 border rounded bg-blue-50 shadow-md">
        <h2 className="text-lg text-gray-600 font-semibold mb-2">🌦️ Set Current Weather</h2>
        <select
          value={weather}
          onChange={handleWeatherChange}
          className="border p-2 rounded"
        >
          <option value="Sunny">Sunny</option>
          <option value="Rainy">Rainy</option>
          <option value="Cloudy">Cloudy</option>
        </select>
        <p className="mt-2 text-sm text-gray-600">Current: <strong>{weather}</strong></p>
      </div>
      {/* Product List */}
      <ul className="space-y-2">
        {products.map(p => (
          <li key={p.id} className="flex flex-col md:flex-row gap-2 border p-4 rounded shadow items-center">
            <img src={p.image} alt={p.name} className="w-32 h-24 object-cover rounded" />
            <div className="flex-1">
              <h3 className="font-bold">{p.name} - ₹{p.price}</h3>
              <p className="text-sm text-gray-500">Category: {p.category}</p>
            </div>
        
            <button onClick={() => handleDelete(p.id)} className="bg-red-500 text-white px-3 rounded">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
