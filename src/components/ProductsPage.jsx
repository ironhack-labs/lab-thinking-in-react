import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const searchStore = (str) => {
    let searchList;

    if (str === '') {
      setProducts(jsonData);
    } else {
      searchList = products.filter((product) => {
        console.log('a', ShowProductInStock());
        return product.name.toLowerCase().includes(str.toLowerCase());
      });

      setProducts(searchList);
    }
  };

  const ShowProductInStock = (isChecked) => {
    if (isChecked) {
      const productsInStock = products.filter((product) => product.inStock);
      setProducts(productsInStock);
    } else {
      setProducts(jsonData);
    }
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar searchBar={searchStore} checkbox={ShowProductInStock} />

      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;