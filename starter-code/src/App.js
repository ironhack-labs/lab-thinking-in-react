import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './Componentes/FilterableProductTable/FilterableProductTable';
import data from './data.json'


class App extends Component {
  constructor() {
    super()
this.state={
  products: data.data
}
  }



  render() {
    return (
      <React.Fragment>
        {console.log(this.state.products)}
        
        <FilterableProductTable  products={this.state.products}/>

      </React.Fragment>
    );
  }
}

export default App;
