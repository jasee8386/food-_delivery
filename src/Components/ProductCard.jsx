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
        <button 
        className="btn btn-primary mt-4"
        onClick={() => addToCart(product)}
      >
        Add to Cart 🛒
      </button>
    </div>
  );
}

export default ProductCard;
