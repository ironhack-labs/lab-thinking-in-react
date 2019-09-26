import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    const salesItem = this.props.products.data

      .filter(el => {
        return el.name.toLowerCase().includes(this.props.search.toLowerCase());
      })
      .filter(el => {
        if (this.props.checkState) return el.stocked;
        else return el;
      })

      .map(el => {
        if (el.stocked === true) {
          return (
            <tr key={el.name}>
              <td>{el.name}</td>
              <td>{el.price}</td>
            </tr>
          );
        } else {
          return (
            <tr style={{ color: 'red' }} key={el.name}>
              <td>{el.name}</td>
              <td>{el.price}</td>
            </tr>
          );
        }
      });

    return <React.Fragment>{salesItem}</React.Fragment>;
  }
}
