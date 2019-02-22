import React, { Component } from "react";
//  si checked true and item.stocked false === hide  else montre tout

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

// if (checked && item.stocked) {
//   return (
//     <tr>
//       <td>{item.name}</td>
//       <td>{item.price}</td>
//     </tr>
//   );
// } else {
//   return (
//     <tr>
//       {item.stocked ? (
//         <td>{item.name}</td>
//       ) : (
//         <td className="text-danger">{item.name}</td>
//       )}
//       {item.stocked ? <td>{item.price}</td> : <td>Unavailable</td>}
//     </tr>
//   );
// }
