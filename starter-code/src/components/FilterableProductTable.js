import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  state = {
    query: '',
    onlyStock: false 
  };

  setQuery = query => {
    console.log('OnlyStock: ', this.state.onlyStock);
    console.log(this.props);
    this.setState({
      query
    });
  };

  setCheck= ()=>{
    this.setState({
      onlyStock: !this.state.onlyStock
    })
  }

  render() {
    const filteredProducts=this.props.products.filter(prod=>{
      return prod.name.toLowerCase().includes(this.state.query);
    })

    return (
      <div>
        <SearchBar handleQuery={this.setQuery} query={this.state.query} handleCheck={this.setCheck} />
        <ProductTable
          products={filteredProducts}
          passedQuery={this.state.query}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
