import React from 'react';
import './App.css';
import ProductTable from './IronStorePage/ProductTable';
import { Container } from 'react-bootstrap'

  function App() {
    return (
    <>


    <Container>
      <h1 className="title">IronStore</h1>
          {/* <SearchBar/> */}
          <ProductTable/>
      </Container>


      
    </>
    );
  }

export default App;
