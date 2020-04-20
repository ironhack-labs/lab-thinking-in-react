import React, {Component} from 'react';


class ProductRow extends Component {
  render() {
    const {data} = this.props;
    return (
      <tr className={data.stocked ? '' : 'out'}>
        <td>{data.name}</td>
        <td>{data.price}</td>
      </tr>
    );
  }
}

export default ProductRow;