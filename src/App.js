import React from 'react';
import productData from './data.json'
import './App.css';
import Container from 'react-bootstrap/Container';
import FilterableProductTable from './components/filterableproducttable/FilterableProductTable'

function App() {
  return (
    <div className="App">
        <Container>
          <h1 className='display-1'>IronStore</h1>
          <h4>Search</h4>
          <FilterableProductTable products={productData['data']}/>
        </Container>
    </div>
  );
}

export default App;
