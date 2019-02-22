import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";

class App extends Component {
  render() {
    return (
      <Container className="FilterableProductable">
        <h1>Iron Store</h1>
        <Row>
          <SearchBar />
          <ProductTable />
        </Row>
      </Container>
    );
  }
}

export default App;
