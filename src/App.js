import React from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import datajson from './data.json'

class App extends React.Component {

  state = {
    products: datajson.data,
    filterText: "",
    inStockOnly: false
  }

  filter = (value) => {
    this.setState({
      filterText: value
    })
  }

  stockChange = (value) => {
    this.setState({inStockOnly: value})
  }

  render() {
    return (
      <div>
        <FilterableProductTable products={this.state.products} filterText={this.state.filterText} filter={this.filter} inStockOnly={this.state.inStockOnly} stockChange={this.stockChange}/>
      </div>
    )
  }
}

export default App;
