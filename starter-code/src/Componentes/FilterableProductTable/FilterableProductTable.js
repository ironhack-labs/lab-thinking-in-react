import React, { Component } from 'react'
import Searchbar from '../Searchbar/Searchbar';
import ProductTable from '../ProductTable/ProductTable';

export default class FilterableProductTable extends Component {


  render() {
    //debugger
    //console.log(this.props.filteredProducts)

    return (
      <div>
        <Searchbar
          filterP={(e) => this.props.filterP(e)}
          filterQuery={this.props.filterQuery}
          checkFilter={(e) => this.props.checkFilter(e)}
        // filterCheckAndText={(e) => this.props.filterCheckAndText(e)}
        />


        <ProductTable

          products={this.props.products}
          filteredProducts={this.props.filteredProducts}

        />
      </div>
    )
  }
}
