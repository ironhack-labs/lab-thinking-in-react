import React from 'react';

function ProductRow(props) {
  const { name, price } = props;
  return (
    <div>
      <div>{props.name}</div>

      <div>{props.priice}</div>
    </div>
  );
}

export default ProductRow;
