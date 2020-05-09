import React, { Component, Fragment } from 'react';

export default class ProductRow extends Component {
  render() {
    const dataMap = this.props.product.data
      .filter((data, index) => {
        return this.props.checked ? data.stocked === true : true;
      })
      .filter((data, index) => {
        return data.name
          .toLowerCase()
          .includes(this.props.search.toLowerCase());
      })
      .map((data, index) => (
        <ul className="data" key={index}>
          <li style={{ color: !data.stocked ? 'red' : 'black' }}>
            {' '}
            {data.name}
          </li>
          <li style={{ color: !data.stocked ? 'red' : 'black' }}>
            {data.price}
          </li>
        </ul>
      ));
    return (
      <Fragment>
        <ul className="data">
          <h3>Name</h3>
          <h3>Price</h3>
        </ul>
        {dataMap}
      </Fragment>
    );
  }
}
