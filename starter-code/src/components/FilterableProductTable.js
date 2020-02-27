import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: props.products,
      OldProducts: props.products
    };
  }

  handleChange = (e) => {
    let { value } = e.target;
    let newProducts = this.state.products.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    this.setState({
      products: newProducts
    });
  };

  handleDelete = (e) => {
    let { key } = e;
    if (key === "Backspace" || key === "Delete") {
      this.setState({
        products: this.state.OldProducts
      });
    }
  };

  render() {
    return (
      <div className="Filterable">
        <h1>IronStore</h1>
        <SearchBar handleChange={this.handleChange} handleDelete={this.handleDelete}/> 
        <ProductTable  products={this.state.products}/>
      </div>
    );
  }
}

export default FilterableProductTable;