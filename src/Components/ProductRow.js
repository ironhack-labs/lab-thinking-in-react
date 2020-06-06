import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import _ from 'lodash';

function ProductRow(props) {
  return (
    <div className="columns is-centered">
      <div className="column is-8">
        <div className="card">
          <div className="card-content">
            <div className="columns">
              <div className="column">{props.name} </div>
              <div className="column">{props.price} </div>
              <div className="column"> {props.stocked} </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductRow;
