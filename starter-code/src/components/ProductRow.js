import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    const products = this.props.products.data

      .filter(data => {
        return data.name
          .toLowerCase()
          .includes(this.props.search.toLowerCase());
      })

      .filter(data => {
        if(this.props.checkedState){
            return data.stocked;
        }else{
            return data
        }
      })

      .map(data => {
        if (!data.stocked) {
          return (
            <tr style={{ color: 'red' }}>
              <td>{data.name}</td>
              <td>{data.price}</td>
            </tr>
          );
        } else {
          return (
            <tr>
              <td>{data.name}</td>
              <td>{data.price}</td>
            </tr>
          );
        }
      });
    return <React.Fragment>{products}</React.Fragment>;
  }
}
export default ProductRow;
