// import React, { Component } from 'react';

// export class ProductRow extends Component {
//   //si this.props.product.stocked === false --> Marcar en rojo

//   inStock() {}

//   render() {
//     return (
//       <tr>
//         <td className={inStock}>{this.props.name}</td>
//         <td>{this.props.price}</td>
//       </tr>
//     );
//   }
// }

// export default ProductRow;

import React, { Component } from 'react';

export class ProductRow extends Component {
  render() {
    console.log();
    return (
      <tr>
        <td className={!this.props.producto.stocked ? 'notStocked' : null}>
          {this.props.producto.name}
        </td>
        <td>{this.props.producto.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
