import React from 'react';
import './ProductRow.css';

export default class ProductRow extends React.Component {
  renderName = (name, stocked) => {
    return <p className={stocked ? '' : 'red'}>{name}</p>;
  };

  render() {
    const { price, stocked, name } = this.props;
    return (
      <div>
        {this.renderName(name, stocked)}
        <p>{price}</p>
      </div>
    );
  }
}
