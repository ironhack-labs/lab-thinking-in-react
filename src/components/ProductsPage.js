import { useState } from 'react';
import jsonData from '../data.json';
import Search from './Search';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [productsData, setProductsData] = useState(jsonData);

  const searchResult = (input) => {
    let searchedProducts = productsData.filter((eachProduct) => {
      return eachProduct.name.toLowerCase().includes(input);
    });

    setProducts(searchedProducts);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <Search handleSearch={searchResult} />
      <ProductTable allProducts={products} />
    </div>
  );
}

export default ProductsPage;
