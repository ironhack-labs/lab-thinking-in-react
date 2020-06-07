import React from 'react';
import 'bulma/css/bulma.css';

function ProductRow(props) {
  let stockedColor = '';

  !props.stocked
    ? (stockedColor = 'column has-text-danger is-size-4')
    : (stockedColor = 'column has-text-primary is-size-4');

  return (
    <div className="columns is-centered">
      <div className="column is-6">
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">{props.category}</div>
          </div>
          <div className="card-content">
            <div className="columns">
              <div className={stockedColor}>{props.name}</div>
              <div className=" column is-size-4">{props.price} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductRow;
