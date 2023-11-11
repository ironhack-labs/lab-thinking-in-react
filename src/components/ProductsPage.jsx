import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const copyProducts = jsonData;

  const productFilter = (text) => {
    if (!text) {
      setProducts(copyProducts);
      return;
    }

    setProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <div className="product-page">
      <h1>IronStore</h1>
      <SearchBar productFilter={productFilter} />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
