import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data.json';
import { Container } from 'reactstrap';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

class App extends React.Component {
  state = {
    searchQuery: '',
    onStockCheck: false,
  };

  handleSearchChange = (searchQuery) => {
    this.setState({
      searchQuery: searchQuery,
    });
  };

  handleCheckboxChange = (onStockCheck) => {
    this.setState({
      onStockCheck: onStockCheck,
    });
  };

  render = () => {
    return (
      <Container className="App">
        <h1>Iron Store</h1>
        <SearchBar
          searchQuery={this.state.searchQuery}
          onStock={this.state.onStockCheck}
          handleSearchChange={this.handleSearchChange}
          handleCheckboxChange={this.handleCheckboxChange}
        />
        <ProductTable
          products={data}
          searchQuery={this.state.searchQuery}
          onStockCheck={this.state.onStockCheck}
        />
      </Container>
    );
  };
}

export default App;
