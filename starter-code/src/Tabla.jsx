import React, { Component } from 'react';

export default class Tabla extends Component {
  render() {
    let { items, itemsshown } = this.props;
    console.log('Items', items, '\nItems Shown', itemsshown);
    return (
      <div className="Tabla">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {itemsshown.map(item => {
              return (
                <Entrada item={item} key={itemsshown.indexOf(item)}></Entrada>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

class Entrada extends Component {
  render() {
    let { item } = this.props;
    console.log(item);
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.price}</td>
      </tr>
    );
  }
}
