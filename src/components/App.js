import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import FilterableProductTable from './FilterableProductTable'

function App() {
  return (
    <Container>
        <FilterableProductTable />
    </Container>
  );
}

export default App;
