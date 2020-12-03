import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = (props) => {
  console.log('props from product table - products', props);

  const listOfProducts = props.products;
  // console.log('listOfProducts', listOfProducts);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* <ProductRow product={props.products[0]} /> */}
          {listOfProducts &&
            listOfProducts.map((product) => {
              console.log('*************', product);
              return <ProductRow key={product.id} product={product} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
