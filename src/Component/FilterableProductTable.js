import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ProductRow from './ProductRow';

class FilterableProductTable extends Component {
  state = {
    InStock: null,
    searchValue: '',
  };

  InStock = (event) =>{
      this.setState({InStock: event.target.checked});
  }

  handleSearch = (event) => {
    console.log('I am being triggered');

    this.setState({ searchValue: event.target.value });
  };

  render() {
    const filteredProducts = this.props.products.filter((product) => {
        if(!this.state.searchValue && !this.state.InStock){
            return product;
        }else if (!this.state.searchValue && this.state.InStock) {
                return(product.stocked === this.state.InStock)

            }else{

              return product.name.includes(this.state.searchValue);
              
            }
                });
    
    
    return (
      <div>
        <h1>IronHack</h1>
        <SearchBar callback={this.handleSearch}  Stock={this.InStock} />
        <ProductTable products={filteredProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
