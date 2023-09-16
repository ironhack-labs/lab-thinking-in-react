import { useEffect, useState } from 'react';
import jsonData from '../data.json';
import ProductsTable from './ProductsTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');
  const [isInStock, setIsInStock] = useState(false);

  useEffect(() => {
    setProducts(jsonData);
    setProducts((prevProduct) =>
      prevProduct.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  useEffect(() => {
    setProducts(jsonData);
    if (isInStock) {
      setProducts((prevProduct) =>
        prevProduct.filter((product) => product.inStock === true)
      );
    }
  }, [isInStock]);

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
      <SearchBar
        products={products}
        search={search}
        setSearch={setSearch}
        isInStock={isInStock}
        setIsInStock={setIsInStock}
      />
      <ProductsTable
        products={products}
        deleteProduct={deleteProduct}
        resetProduct={resetProduct}
      />
    </div>
  );
}

export default ProductsPage;
