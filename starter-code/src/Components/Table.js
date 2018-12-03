import React, { Component } from "react";
import Item from "./Item";
import Title from "./Title";

class Table extends Component {
  render() {
    let lastCategory = "";
    let table = [];
    this.props.stock.forEach(item => {
      if (item.category !== lastCategory) {
        table.push(<Title key={table.length} title={item.category} />);
      }
      table.push(<Item key={table.length} item={item} />);
      lastCategory = item.category;
    });

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
            {table}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
