import { useState } from 'react';
import products from './../data.json';
import { ProductTable } from './ProductTable';
import { SearchBar } from './SearchBar';

export function ProductsPage() {
  const [searchString, setFormState] = useState('');
  const handleChange = (e) => {
    setFormState(e.target.value);
  };


  return (
    <div>
      <SearchBar handleChange={handleChange} searchString={searchString} />
      <ProductTable products={products} searchString={searchString} />
    </div>
  );
}
