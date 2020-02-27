import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar"
import Container from 'react-bootstrap/Container'
import data from "./data.json"
import DataTable from "./components/Table/DataTable"
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      data: data.data,
      filter: ""
    }

  }


  setFilter = info => {
    this.setState({ filter: info })

  }

  render() {
    const filteredSport = this.state.data.filter(elm => elm.name.toLowerCase().includes(this.state.filter.toLowerCase()))

    return (
      <Container as="main" className="text-center">
        <h1>IronStore</h1>
        <SearchBar setFilter={this.setFilter} />
        <DataTable data={filteredSport} />
      </Container>
    );
  }
}
