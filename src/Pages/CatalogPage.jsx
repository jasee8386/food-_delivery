import { useState } from 'react';
import ProductList from '../Components/ProductList';
import FilterBar from '../Components/FilterBar';
import ProductDta from '../ProductDta';


function CatalogPage() {
   const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  const filteredProducts = ProductDta.filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === 'All' || product.category === category)
    );
  });

  return (
    <div className="p-6">
      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={category}
        setCategory={setCategory}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default CatalogPage;
