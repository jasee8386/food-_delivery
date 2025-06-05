import Header from "./Header";

function FilterBar({ searchTerm, setSearchTerm, category, setCategory }) {
  return (
    <div className="flex gap-4 mb-4">
      
      <input
        type="text"
        placeholder="Search products..."
        className="p-2 border rounded w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select className="p-2 border rounded text-gray-400" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
          <option value="Starters">Starters</option>
          <option value="Drinks">Drinks</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Meals">Meals</option>
          <option value="Desserts">Desserts</option>
      </select>
    </div>
  );
}

export default FilterBar;
