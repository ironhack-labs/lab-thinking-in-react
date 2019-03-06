import React, { Component } from "react";

class FilterableProductTable extends Component {
  render() {
    console.log(this.props);

    const data = this.props.data.map((element, index) => {
      return (
        <ul key={index}>
          <li>{element.category}</li>
          <li>{element.price}</li>
          <li>{element.stocked}</li>
          <li>{element.name}</li>
        </ul>
      );
    });

    return <div>{data}</div>;
  }
}

export default FilterableProductTable;
