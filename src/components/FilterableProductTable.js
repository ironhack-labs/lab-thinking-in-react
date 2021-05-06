import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class App extends React.Component {
  render() {
    return (
      <div className="FilterableProductTable">
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
}

export default App;
