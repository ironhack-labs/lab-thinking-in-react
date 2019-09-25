import React, { Component } from 'react';
import SearchBar from './SearchBar';
import NameFeed from './NameFeed';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class FilteredProductTable extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      productList: []
    };
  }

  callbackFunction = childData => {
    this.setState({ query: childData });
    console.log('filtered component state', this.state);
  };

  render() {
    console.log('filtarere products data', this.state);
    console.log('this. props ', this.props);
    return (
      <div>
        <Container className="p-5">
          <h1>intro to react</h1>
        </Container>
        <Container className="p-2">
          <SearchBar parentCallback={this.callbackFunction} />
        </Container>
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
        <Container className="p-2">
          <div>
            {this.props.products.data.map(product => (
              <Card body>{product.name}</Card>
            ))}{' '}
          </div>
        </Container>
      </div>
    );
  }
}

export default FilteredProductTable;
