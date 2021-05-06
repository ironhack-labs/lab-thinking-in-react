import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import ProductsList from './ProductsList'

const App = () => {
  return (

    <Container>

      <h1>IronStore</h1>
      <ProductsList />

    </Container>

  );
}

export default App
