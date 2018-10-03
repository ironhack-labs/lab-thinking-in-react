import React from "react";
import data from "./data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import FilterableProductTable from "./FilterableProductTable";


class App extends React.Component {
  constructor(){
    super()
    this.state = {
        data: data.data
    }
}
  render() {
    return (
      <div className="container">
        <ProductTable products={this.state.data} />
      </div>
    );
  }
}

export default App;
