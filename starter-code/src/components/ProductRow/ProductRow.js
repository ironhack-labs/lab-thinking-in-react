import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class ProductRow extends Component {
  render() {
    // let search = this.props.search.toLowerCase();
    // console.log(search);

    // check();

    return (
      <>
        {this.props.data.map((item) => {
          return (
            <tr key={uuidv4()}>
              {!item.stocked ? (
                <td style={{ color: 'red' }}>{item.name}</td>
              ) : (
                <td>{item.name}</td>
              )}
              <td>{item.price}</td>
            </tr>
          );
        })}
      </>
    );
  }
}
