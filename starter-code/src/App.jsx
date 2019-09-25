import React, { Component } from 'react';
import './App.css';
import data from './data';
import FilterableProductTable from './components/FilterableProductTable';
import Container from 'react-bootstrap/Container';

class App extends Component {
  render() {
    return (
      <Container>
        <h1 style={{ textAlign: 'center' }}>IronStore</h1>
        <FilterableProductTable products={data['data']} />
      </Container>
    );
  }
}

export default App;
