import { useState } from 'react';
import jsonData from '../data.json';
import ProductsTable from './ProductsTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  function deleteProduct(productId) {
    setProducts((prevProduct) =>
      prevProduct.filter((product) => product.id !== productId)
    );
  }

  function resetProduct() {
    setProducts(jsonData);
  }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar products={products} />
      <ProductsTable
        products={products}
        deleteProduct={deleteProduct}
        resetProduct={resetProduct}
      />
    </div>
  );
}

export default ProductsPage;
