import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import productsJSON from './../data.json';
import { useState } from 'react';

function ProductsPage() {
  const [products, setProducts] = useState(productsJSON);
  const [filterProducts, setFilterProducts] = useState(productsJSON);

  //function that checks what the user is writing and filters the main data for it
  const queryProducts = (char) => {
    let filteredProducts;

    if (char === '') {
      filteredProducts = filterProducts;
    } else {
      filteredProducts = filterProducts.filter((eachProduct) => {
        return eachProduct.name.toLowerCase().includes(char.toLowerCase());
      });
    }
    setProducts(filteredProducts);
  };

  return (
    <div>
      <h1>IronStore</h1>
      {/* pass queryProdycts function as props */}
      <SearchBar searchProducts={queryProducts} />
      <ProductTable allProducts={products} />
    </div>
  );
}

export default ProductsPage;
