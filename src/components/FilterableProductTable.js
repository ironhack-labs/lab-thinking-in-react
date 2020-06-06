import React from "react";
import data from '../data.json'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

    
class FilterableProductTable extends React.Component {


     state = {
         data : data,
         searchTerm: ""
        }
    

    searchHandler =(searchTerm) => {
        this.setState({
          searchTerm: searchTerm
      })
    }

    render() {


    return (
       
        <div>
        <h1>IronStore</h1>
        <SearchBar onSearchCallback={this.searchHandler} currentSearchTerm={this.state.searchTerm}></SearchBar>
        <ProductTable currentSearchTerm={this.state.searchTerm} data={this.state.data}></ProductTable>

      </div>        
        );
      };
    }

export default FilterableProductTable;