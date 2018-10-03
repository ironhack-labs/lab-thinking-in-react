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
        data: data.data,
        search: data.data
    }
  }
  
  filterProducts = (event) => {
    let includeText = [...this.state.data]
    includeText = this.state.data.filter(
      e=> {
        return e.name.toLowerCase().includes(event.target.value.toLowerCase());
      }
    )

    this.setState({search: includeText})
  }

  render() {
    return (
      <div className="container">
        <ProductTable products={this.state.search} filterProducts={this.filterProducts}/>
      </div>
    );
  }
}

export default App;
