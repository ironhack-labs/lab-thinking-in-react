import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import React,{ Component } from "react";
import './FilterableProductTable.css'

class FilterableProductTable extends Component {
    state = {
        productsList: this.props.products,
    }

    filteredProducts = (inputSearch) => {
        if (inputSearch === '') {
            this.setState({
                productsList: this.props.products,
            })
            return
        }
        const newProductsList = this.props.products.filter((product) => {
            return product.name.toLowerCase().includes(inputSearch.toLowerCase())
        })
        this.setState({
            productsList: newProductsList,
        })
    }  

    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <div className='search-bar-div'>
                    <SearchBar filteredProducts={this.filteredProducts}/>
                </div>
                <div className='product-table'>
                    <ProductTable products={this.state.productsList}/>
                </div>
            </div>
        )
    }
}

export default FilterableProductTable;