import React, { Component } from 'react';
import './App.css';
import data from './data';
import FilterableProductTable from './components/FilterableProductTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';
import Container from 'react-bootstrap/Container';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data['data'],
      query: ''
    };
    this.search = this.search.bind(this);
  }
  search(value) {
    this.setState({
      query: value
    });
  }

  get FilteredProducts() {
    const query = this.state.query;
    const data = this.state.data;
    return data.filter(product =>
      product.name.toLowerCase().includes(query.toLocaleLowerCase())
    );
  }

  // onStock(){
  //   this.
  // }
  render() {
    const dataList = this.state.data;
    return (
      <Container>
        <SearchBar query={this.state.query} search={this.search} />
        {this.FilteredProducts.map(products => (
          <FilterableProductTable products={products} key={products.name} />
        ))}
      </Container>
    );
  }
}

export default App;
