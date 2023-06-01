import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [allProducts, setAllProducts] = useState(jsonData);
  const [input, setInput] = useState('');

  const filterProducts = (value) => {
    const selectedValue = value;
      let nextProducts = allProducts.filter((product) => {
        return product.name.toLowerCase().includes(selectedValue);
      });
      setProducts(nextProducts);
  }

  const filterProductsByName = (event) => {
    filterProducts(event.target.value)
    setInput(event.target.value.toLowerCase());

  };

  const filterStock = (event) => {
    if (event.target.checked) {
      setProducts((state) =>
        state.filter((product) => {
          return product.inStock === true;
        })
      );
    } else {
      filterProducts(input)
    }
  };
  return (
    <div className="page-body">
      <h1>IronStore</h1>
      <SearchBar
        filterProductsByName={filterProductsByName}
        filterStock={filterStock}
      />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
