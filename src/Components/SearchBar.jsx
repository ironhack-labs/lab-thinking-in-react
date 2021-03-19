import React, { PureComponent } from 'react';


export class ProdCatRow extends PureComponent {
  render() {
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

export default ProdCatRow;
