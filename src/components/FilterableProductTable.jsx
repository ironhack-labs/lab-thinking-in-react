import React from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends React.Component {

    state = {
    filteredProducts : this.props.products,
    inStock : false,
    filterText : ""
    }


    searchText = (inputText) => {
        
        let filArr = this.props.products.filter((product) => {
            return product.name.includes(inputText) 
        })

        if(this.state.inStock === true){
            filArr = filArr.filter((product) => {
            return product.stocked})
        }

        this.setState({filteredProducts : filArr, 
        inStock: this.state.inStock,
        filterText: inputText})

    }   

    toggleStock = (isChecked) => {
        let filArr = this.props.products.filter((product) => {
            return product.name.includes(this.state.filterText) 
        })

        if(isChecked === true){
            filArr = filArr.filter((product) => {
            return product.stocked})
    }

    this.setState({filteredProducts : filArr, 
        inStock: isChecked,
        filterText: this.state.filterText})
    }

    render() {
      return (
        <div>
          <SearchBar searchText = {this.searchText} toggleStock = {this.toggleStock}/>
          <ProductTable products={this.state.filteredProducts} />
        </div>
      );
    }
  }

export default FilterableProductTable
