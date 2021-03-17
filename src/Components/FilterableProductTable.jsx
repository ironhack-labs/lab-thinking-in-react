import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
 

export class FilterableProductTable extends Component {
    productList = [...this.props.products]
    state = {
       list : this.productList,
    }

    

    handleSearchResult = (searchResult) => {
        const value = searchResult
        if (value === true) {
            const searchArray = this.productList.filter(product => product.stocked === true )
            this.setState({list: searchArray})
        } else if (value === false) {
            const searchArray = this.productList
            this.setState({list: searchArray})
        } else {
            const searchArray = this.productList.filter(product => product.name.includes(value))
            this.setState({list: searchArray})
        }

        
    }


    render() {


        return (
            <div>
               <h1>IronStore</h1>
               <div className="search-box" >
                <SearchBar search={this.handleSearchResult}/>
               </div>
               <div className="products-table">
                <ProductTable products={this.state.list}/>
               </div>
            </div>
        )
    }
}

export default FilterableProductTable
