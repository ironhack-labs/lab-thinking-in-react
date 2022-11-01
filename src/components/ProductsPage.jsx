import { useState } from 'react';
import jsonData from '../data.json';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [checked, setChecked] = useState(true);

  const productsWithStock = products.filter((product) => {
    return product.inStock === true;
  });

  const sortProducts = () => {
    checked ? setProducts(productsWithStock) : setProducts(jsonData);
  };

  const productsInStockSwitch = (event) => {
    setChecked(!event.target.checked);
    sortProducts();
  };

  return (
    <div>
      <SearchBar
        checked={checked}
        productsInStockSwitch={productsInStockSwitch}
      />
      <ProductTable jsonData={products} />
    </div>
  );
}
export default ProductsPage;
