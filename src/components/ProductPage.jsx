import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default function ProductPage() {
  const [products, setProducts] = useState(jsonData);

  const handleChangeSearchBar = (filterProduct) => {
    let copy = [...jsonData];
    copy = copy.filter((product) =>
      product.name.toLowerCase().includes(filterProduct.toLowerCase())
    );
    setProducts(copy);
  };

  const handleChangeCheckbox = (isChecked) => {
    let copy = [...jsonData];
    if (isChecked) {
      copy = copy.filter((product) => product.inStock === isChecked);
    }
    setProducts(copy);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <div>
        <SearchBar
          handleChangeSearchBar={handleChangeSearchBar}
          handleChangeCheckbox={handleChangeCheckbox}
        />
      </div>
      <div className="Center">
        <ProductTable products={products} />
      </div>
    </div>
  );
}
