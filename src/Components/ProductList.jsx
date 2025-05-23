import ProductCard from './ProductCard';

function ProductList({ products }) {
  if (products.length === 0) return <p>No products found.</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
