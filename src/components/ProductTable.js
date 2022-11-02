import React from 'react';
import ProductRow from './ProductRow';

function ProductTable({ products, searchValue, inStock }) {
  console.log(
    'ProductTable inStockValue: ',
    inStock,
    'ProductTable products: ',
    products,
    'ProductTable SearchValue: ',
    searchValue
  );

  const filteredProductsByName = products.filter((elem) => {
    return elem.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const filteredProductsByInStock = filteredProductsByName.filter((elem) => {
    return inStock ? elem.inStock : elem;
  });

  return (
    <div className='tableDiv'>
      <table className="productTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductRow filteredProductsByInStock={filteredProductsByInStock} />
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
