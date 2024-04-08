import { useState } from 'react';
import jsonData from '../../../data/data.json';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterProducts = (term, stocked) => {
    const filtered = products.filter((item) => {
      const searchTerm = term
      const nameMatches = item.name.toLowerCase().includes(searchTerm);
      const stockedMatches = !stocked || item.inStock;
      return nameMatches && stockedMatches;
    });
    
    setFilteredProducts(filtered);
  };

  return (
    <div className="d-flex row justify-content-center my-5">
      <SearchBar filterProducts={filterProducts} />
      <ProductTable filteredProducts={filteredProducts} />
    </div>
  );
}

export default ProductsPage;