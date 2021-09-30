import React from 'react';
import './ProductRow.css';
const ProductRow = (props) => {
  return (
    <div>
      <div className="ProductRow__inner">
        <p
          className={
            props.isStocked === false ? 'ProductRow__inner-onStock' : ''
          }
        >
          {props.name}
        </p>
        <p>{props.price}</p>
      </div>
      <hr />
    </div>
  );
};

export default ProductRow;
