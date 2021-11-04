import React from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable'
import products from './data.json'

class App extends React.Component {

state = {
  productsToDisplay: products.data
}

  render() {
  return (
    <div>
      <FilterableProductTable listOfProducts={this.state.productsToDisplay} />
    </div>
  );
  }

}

export default App;
