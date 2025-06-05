import { useState, useEffect } from 'react';
import ProductList from '../Components/ProductList';
import FilterBar from '../Components/FilterBar';
import Header from '../Components/Header';

function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  // Load products from localStorage
  useEffect(() => {
  const stored = JSON.parse(localStorage.getItem('products'));
  if (stored && stored.length > 0) {
    setProducts(stored);
  } else {
    const defaultProducts = [
      { id: 1, name: 'Burger', category: 'Fast Food' , price: 239,image:'https://static.vecteezy.com/system/resources/previews/019/023/604/non_2x/front-view-tasty-meat-burger-with-cheese-and-salad-free-photo.jpg'},
  { id: 2, name: 'Pizza', category: 'Fast Food',price: 199,image:'https://th.bing.com/th/id/OIP.SEfXqwWqK1NNMpH9ZmNrgwHaE8?rs=1&pid=ImgDetMain' },
  { id: 3, name: 'Salad', category: 'Starter' , price: 125,image:'https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad-recipes.jpg'},
  { id: 4, name: 'Sushi', category: 'Meals',price: 230,image:'https://th.bing.com/th/id/OIP.kVHbr-m6IRkEFcZ7hPBMpgHaHa?rs=1&pid=ImgDetMain' },
    ];
    localStorage.setItem('products', JSON.stringify(defaultProducts));
    setProducts(defaultProducts);
  }
}, []);


  const filteredProducts = products.filter(product => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === 'All' || product.category === category)
    );
  });

  return (
    <div className="p-6">
      <Header />
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
