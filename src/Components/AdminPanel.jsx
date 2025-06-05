// src/Components/AdminPanel.jsx
import { useState, useEffect } from "react";

export default function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products") || "[]");
    setProducts(stored);
  }, []);

  const handleAdd = () => {
    if (!name || !price) return alert("Enter name and price");
    const newProduct = { id: Date.now(), name, price };
    const updated = [...products, newProduct];
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
    setName(""); setPrice("");
  };

  const handleDelete = (id) => {
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
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
        <button onClick={handleAdd} className="bg-green-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {products.map(p => (
          <li key={p.id} className="flex justify-between border p-2 rounded shadow">
            <span>{p.name} - ₹{p.price}</span>
            <button onClick={() => handleDelete(p.id)} className="bg-red-500 text-white px-3 rounded">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
