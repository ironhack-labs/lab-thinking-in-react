import React from 'react';
import ProductRow from './ProductRow';
const shortid = require('shortid');

const ProductTable = (props) =>
  props.products.map((singleProduct) => (
    <ProductRow
      key={shortid.generate()}
      {...(({ name, price }) => ({ name, price }))(singleProduct)}
    />
  ));
export default ProductTable;
