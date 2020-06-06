import React from 'react';

// importing data
import productDataObject from './data.json'

// importing styles
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// importing components
import FilterableProductTable from './components/organisms/FilterableProductTable';
import SearchBar from './components/molecules/SearchBar';

class App extends React.Component {

  state = {
    dataArr: productDataObject.data,
    searchTerm: ""
}

searchHandler = (searchTerm) => {
    this.setState({
        searchTerm: searchTerm
    })
}
  render() {

           let filteredProducts = this.state.dataArr.filter((product) => product.name.toLowerCase().includes(this.state.searchTerm))

    return (
      <div className="App container">
        <h1 className="h1">IronStore</h1>
        <SearchBar onSearchCallback={this.searchHandler} currentSearchTerm={this.state.searchTerm}></SearchBar>

        <FilterableProductTable products={filteredProducts}></FilterableProductTable>
        
      </div>
    );
  }
}

export default App;
