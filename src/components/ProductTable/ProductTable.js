import React from 'react';
import ProductRow from '../ProductRow/ProductRow';
import './ProductTable.css';

export default function ProductTable(props) {
  const { data, search } = props;
  return (
    <div id="product-table" className="container px-0 mt-4">
      <div className="col">
        <div id="table-header" className="row">
          <div className="col">Name</div>
          <div className="col">Price</div>
        </div>
        {data
          .filter((product) => product.name.includes(search))
          .map((product) => {
            return <ProductRow key={product.id} {...product} />;
          })}
      </div>
    </div>
  );
}
