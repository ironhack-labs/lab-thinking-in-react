import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SeachBar from './SeachBar';

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

  // const handleChange = (filterProduct, onStock) => {
  //   if (onStock) {
  //     copy = copy.filter(
  //       (product) =>
  //         product.name.toLowerCase().includes(filterProduct.toLowerCase()) &&
  //         product.inStock === onStock
  //     );
  //   } else {
  //     copy = copy.filter((product) =>
  //       product.name.toLowerCase().includes(filterProduct.toLowerCase())
  //     );
  //   }
  //   setProducts(copy);
  // };

  return (
    <div>
      <h1>IronStore</h1>
      <div>
        <SeachBar
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
