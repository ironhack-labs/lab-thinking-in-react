import React from 'react'
import Search from "./SearchBar";
import ProductTable from "./ProductTable"


export class FilterableProductTable extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
     <div className="container">
      <h3>FilterableProductTable</h3>
      <Search searchElement={e => this.searchElement(e)} />
      <ProductTable/>
      </div>
    )
  }

}

export default FilterableProductTable