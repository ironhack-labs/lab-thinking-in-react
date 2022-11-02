import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  // const [products, setProducts] = useState(jsonData); // Kann theoretisch weg
  const [checked, setChecked] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const inStockSwitch = (event) => {
    setChecked(event.target.checked);
    // sortProducts();
  };

  // eslint-disable-next-line array-callback-return
  let products = jsonData.filter((product) => {
    if (checked) {
      if (searchInput === '') {
        return product.inStock === true;
      } else if (
        product.name.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return product.inStock === true;
      }
    } else if (!checked) {
      if (searchInput === '') {
        return product;
      } else if (
        product.name.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return product.inStock === true;
      }
    }
  });

  return (
    <div>
      <SearchBar {...{ checked, inStockSwitch, handleSearch, searchInput }} />
      <ProductTable {...{ products, searchInput, inStockSwitch }} />
    </div>
  );
}
export default ProductsPage;

// refactoring round 1

// eslint-disable-next-line array-callback-return
// let products = jsonData.filter((product) => {
//   if (checked && searchInput === '') {
//     return product.inStock === true;
//   } else if (!checked && searchInput === '') {
//     return product;
//   } else if (
//     checked &&
//     product.name.toLowerCase().includes(searchInput.toLowerCase())
//   ) {
//     return product.inStock === true;
//   } else if (
//     !checked &&
//     product.name.toLowerCase().includes(searchInput.toLowerCase())
//   ) {
//     return product;
//   }
// });
