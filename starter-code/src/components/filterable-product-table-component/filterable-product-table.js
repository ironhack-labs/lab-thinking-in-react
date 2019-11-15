import React from 'react';
import SearchBar from '../search-bar-component/search-bar';
import  ProductTable from '../product-table-component/product-table';
import './filterable-product-table.css';

class FilterableProductTable extends React.Component {
    render() {
        return (
<div className="rest-content">
<SearchBar searchString = {this.props.searchString}
           updateSearchString = {this.props.updateSearchString} 
           stocked  = {this.props.stocked}
           updateCheckedValue = {this.props.updateCheckedValue}
           />
<ProductTable products = {this.props.products} 
              searchString = {this.props.searchString}
              updateSearchString = {this.props.updateSearchString}
              stocked  = {this.props.stocked}
              
              />
</div>
        );
    }
}
export default FilterableProductTable;