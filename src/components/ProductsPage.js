import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [productsData, setProductsData] = useState(jsonData);
  const [products, setProducts] = useState(productsData);

  const search = (str) => {
    let searchResult;
    console.log('search', { str });
    if (str === '') {
      searchResult = productsData;
    } else {
      searchResult = productsData.filter((product) => {
        return product.name.toLowerCase().includes(str.toLowerCase());
      });
    }
    setProducts(searchResult);
  };

  return (
    <div className="container-page">
      <h1>IronStore</h1>
      <SearchBar search={search} />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
