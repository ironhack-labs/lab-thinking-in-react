import React from 'react';

export default function ProductRow(props) {
  const { name, price } = props;  
  return (
    <div className="row table-row">
      <div className="col">{name}</div>
      <div className="col">{price}</div>
    </div>
  );
}
