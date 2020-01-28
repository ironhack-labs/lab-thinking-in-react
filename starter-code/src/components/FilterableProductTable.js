import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
          filterText: '',
          inStockOnly: false
        };
        
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
      }
    
      handleFilterTextChange(filterText) {
        this.setState({
          filterText: filterText
        });
      }
      
      handleInStockChange() {
        this.setState({
          inStockOnly: !this.state.inStockOnly
        })
      }
      
        render() {
          return (
            <div>
              <SearchBar
                 filterText={this.state.filterText}
                 inStockOnly={this.state.inStockOnly}
                 onFilterTextChange={this.handleFilterTextChange}
                 onInStockChange={this.handleInStockChange}
              />
              <ProductTable
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
                products ={this.props.products}
              />
            </div>
          );
        }
      }
      