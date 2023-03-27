import React, { useEffect } from 'react';
import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');
  const [check, setCheck] = useState(false);

  const onChangeSearch = (text) => {
    setSearch((prevSearch) => text)
  };
  const onChangeCheck = (check) => {
    setCheck((prevCheck) => check)
  };

  useEffect(() => {
    setProducts((prevProducts) => jsonData
      .filter((product) => (check ? product.inStock === check : product))
      .filter((product) =>
        search ? product.name.indexOf(search) !== -1 : product
      )
    )
  }, [search, check]);

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        onChangeSearch={onChangeSearch}
        onChangeCheck={onChangeCheck}
      />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
