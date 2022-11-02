import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [checked, setChecked] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const inStockSwitch = (event) => {
    setChecked(event.target.checked);
  };

  // eslint-disable-next-line array-callback-return
  const products = jsonData.filter((product) => {
    if (searchInput === '') {
      if (checked) {
        return product.inStock === true;
      }
      return product;
    } else if (product.name.toLowerCase().includes(searchInput.toLowerCase())) {
      if (checked) {
        return product.inStock === true;
      }
      return product;
    }
  });

  return (
    <div>
      <SearchBar {...{ inStockSwitch, handleSearch, searchInput }} />
      <ProductTable {...{ products }} />
    </div>
  );
}
export default ProductsPage;
