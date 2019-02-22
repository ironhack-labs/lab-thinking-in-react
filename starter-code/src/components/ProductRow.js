import React, { Component } from "react";

class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;
    return (
      <tr>
        {item.stocked ? (
          <td>{item.name}</td>
        ) : (
          <td className="text-danger">{item.name}</td>
        )}
        {item.stocked ? <td>{item.price}</td> : <td>Unavailable</td>}
      </tr>
    );
  }
}

export default ProductRow;
