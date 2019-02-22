import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserSearch: ""
    };
  }

  updateAppSearch(event) {
    this.setState({ currentUserSearch: event });
  }
  render() {
    return (
      <Container className="FilterableProductable">
        <h1>Iron Store</h1>
        <Row>
          <SearchBar update={event => this.updateAppSearch(event)} />
          <ProductTable filterValue={this.state.currentUserSearch} />
        </Row>
      </Container>
    );
  }
}

export default App;
