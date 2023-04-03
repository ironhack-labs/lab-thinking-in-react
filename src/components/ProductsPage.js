import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [inputProduct, setInputProducts] = useState('');
  const [stockCheck, setStockCheek] = useState(false);

  const onInputProduct = (inputText) => {
    setInputProducts(inputText);
  };

  const onStockCheck = (value) => {
    setStockCheek(value);
  };

  const filteredProducts = products
    .filter((preproduct) =>
      preproduct.name.toLowerCase().includes(inputProduct.toLowerCase())
    )
    .filter((preproduct) => stockCheck === false || preproduct.inStock);

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        inputProduct={inputProduct}
        onStockCheck={onStockCheck}
        onInputProduct={onInputProduct}
      />
      <ProductTable products={filteredProducts} inputProduct={inputProduct} />
    </div>
  );
}

export default ProductsPage;
