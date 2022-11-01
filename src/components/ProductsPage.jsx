import React, { useState } from 'react';
import ProductTable from './Products/ProductTable';
import SearchBar from './Products/SearchBar';
import jsonData from '../data.json';

function uuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (a) =>
    (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
  );
}

const productsData = jsonData.map((data) => ({ ...data, id: uuid() }));

const defaultState = {
  search: '',
  inStock: false,
};

export default function ProductsPage() {
  const [products, setProducts] = useState(productsData);
  const [searchInput, setSearchInput] = useState(defaultState);

  const deleteContact = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar searchInput={searchInput} onChange={setSearchInput} />
      <ProductTable
        products={products.filter((product) => product.name.toLowerCase().includes(searchInput.search.toLowerCase()))
          .filter((product)=> (!searchInput.inStock?true:product.inStock))
        }
        onDelete={deleteContact}
      />
    </div>
  );
}
