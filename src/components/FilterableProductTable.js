import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class App extends React.Component {
  render() {
    return (
      <div className="FilterableProductTable">
        <h1>IronStore</h1>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

export default App;
