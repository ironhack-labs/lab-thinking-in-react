import React, { Component } from 'react';
import data from './data.json'
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';


class App extends Component {

  state={
    products:[]
  }

  componentDidMount() {
    this.setState({ products: data.data })
  }

  onChangeSearch = e => {
    let searchProd = e.target.value.toLowerCase()
    if (searchProd === "") return this.setState({ products: data.data })
    let arr = this.state.products.filter(p => p.name.toLowerCase().includes(searchProd)
  )
  this.setState({ products: arr })
}

onChangeStock = e => {
  let { products } = this.state
  if (e.target.checked) {
    products = products.filter(pro => pro.stocked === true)
    this.setState({ products })
  } else {
    this.setState({ products: data.data })
  }
}

  render() {
    let {products} = this.state
    return (
      <div>
        <h1>IronStore</h1>
        <FilterableProductTable
          products = {products}
          onChangeSearch = {this.onChangeSearh}
          onChangeStock = {this.onChangeStock}
        />
      </div>
    );
  }
}

export default App;
