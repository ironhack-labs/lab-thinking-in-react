import { useState } from 'react';
import jsonData from './../data.json';
import { ProductTable } from './ProductTable';
import { SearchBar } from './SearchBar';

const defaultState = [];

export function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const [formState, setFormState] = useState(defaultState);

  console.log(formState.length);
  const handleChange = (event) => {
    setFormState(() => {
      return [event.target.value];
    });
  };

  const searchedProduct = () => {
   let search = [...products].filter
  };

  return (
    <div>
      <SearchBar handleChange={handleChange} formState={formState} />
      <ProductTable products={products} />
    </div>
  );
}
