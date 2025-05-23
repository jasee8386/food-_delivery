function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
       <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-sm text-gray-500">{product.category}</p>
    </div>
  );
}

export default ProductCard;
