import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col sm={12} md={12}>
          <h1>IronStore</h1>  
          <SearchBar />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12}>
          <ProductTable />
        </Col>
      </Row>
    </Container>
  )
}

export default FilterableProductTable
