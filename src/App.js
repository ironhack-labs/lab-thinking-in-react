import React from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable ';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'


function App() {
  return (
    <Container>
      <h1>Iron Store</h1>
      <FilterableProductTable>{data.data}</FilterableProductTable>
    </Container>
  );
}

export default App;
