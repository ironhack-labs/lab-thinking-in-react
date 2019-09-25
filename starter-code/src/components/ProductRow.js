import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class ProductRow extends Component {
  constructor() {
    super();

    this.state = {
      query: '',
      productList: []
    };
  }

  //change the query, filter
  get matched() {
    const query = this.state.query;
    const ProductList = this.state.ProductList;
    return ProductList.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container scope="row">
            <Row>
              <Col md={4}>
                <h1 className="d-flex justify-content-start">name</h1>
              </Col>
              <Col md={{ span: 4, offset: 4 }}>
                <h1 className="d-flex justify-content-end">price</h1>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Container>
          //product mapppppppppp
          <Card body>This is some text within a card body.</Card>
          <Card body>This is some text within a card body.</Card>
          <Card body>This is some text within a card body.</Card>
        </Container>
      </div>
    );
  }
}

export default ProductRow;
