import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import FilterableProductTable from './Components/FilterableProductTable';
import './App.css';
import {LeProvedore} from './Components/dataContext'


class App extends Component {
  render() {
    return (
      <LeProvedore>
        <div className="App">
          <Container
            maxWidth="md"
            style={{ backgroundColor: "#F7BCCB", height: "100vh" }}
          >
            <FilterableProductTable />
          </Container>
        </div>
      </LeProvedore>
    );
  }
}

export default App;
