import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    return (
      <div className="App">
            <div>
                <tr>
                    <td>{this.props.name} </td>
                </tr>
            </div>
      </div>
    );
  }
}

export default ProductRow;