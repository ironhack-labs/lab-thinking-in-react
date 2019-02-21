import React from "react";
import Item from './item'

export default class Products extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          {this.props.dataProp.map((e, idx) => {
            return (
              <Item key={idx} item={e} />)
          })}
        </tbody>
      </table>
    )
  }
}