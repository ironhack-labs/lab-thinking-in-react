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
    if (checked && searchInput === '') {
      return product.inStock === true;
    } else if (!checked && searchInput === '') {
      return product;
    } else if (
      checked &&
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    ) {
      return product.inStock === true;
    } else if (
      !checked &&
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    ) {
      return product;
    }
  });

  // if (checked)
  //   products = products.filter((product) => {
  //     return product.inStock === true;
  //   });

  // Filter by inStockSwitch
  // const productsWithStock = products.filter((product) => {
  //   return product.inStock === true;
  // });

  // const sortProducts = () => {
  //   checked ? setProducts(productsWithStock) : setProducts(jsonData);
  // };

  return (
    <div>
      <SearchBar {...{ checked, inStockSwitch, handleSearch, searchInput }} />
      <ProductTable {...{ products, searchInput, inStockSwitch }} />
    </div>
  );
}
export default ProductsPage;
