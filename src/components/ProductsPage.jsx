import { useState } from 'react';
import products from './../data.json';
import { ProductTable } from './ProductTable';
import { SearchBar } from './SearchBar';

export function ProductsPage() {
  const [searchString, setFormState] = useState('');
  const handleChange = (e) => {
    setFormState(e.target.value);
  };
  const handleCheckbox = (e) => {
    if (e.target.value === false) {
    }
  };

  return (
    <div>
      <SearchBar {...{ handleChange, searchString, handleCheckbox }} />
      <ProductTable products={products} searchString={searchString} />
    </div>
  );
}
