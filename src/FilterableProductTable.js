import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


export default class FilterableProductTable extends React.Component {

    state = {
        products: this.props.products,
        searchQuery: " "
    }

    changeQuery = (newQuery) => {
      this.setState({
        searchQuery: newQuery
      });
    }

    // should read the state from its props
    // state should also receive 
  render(){
    return (
      <div>
        <h1>IronStore</h1>
          <SearchBar setNewQuery={this.changeQuery} searchQuery={this.searchQuery}/> 
        
          <ProductTable products ={this.state.products} searchQuery={this.searchQuery}/>
          {/* take a props, also state of filterable*/}
      </div>
    );
  }
}

