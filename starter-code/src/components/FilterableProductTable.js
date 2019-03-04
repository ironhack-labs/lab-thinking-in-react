import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from "./SearchBar"

class FilterableProductTable extends Component {
  state={
    data: []
  }

  actProdFiltrado = (data)=>{
    this.setState({data}) 
  }

  componentWillMount(){
    const dataInicial = this.props.products.data;
    this.setState({data: dataInicial})
  }

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <div>
          <SearchBar products = { this.props.products } filtrado={this.actProdFiltrado}/>
        </div>
        <div>
          <ProductTable products = { this.state.data } />
        </div>
      </div>
    );
  }
}

export default FilterableProductTable;