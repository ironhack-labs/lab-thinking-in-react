import React, {Component} from "react"
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

class FilterableProductsTable extends Component {
    constructor (props){
        super(props)

        this.state = {
            products: props.products.data,
            filtered: props.products.data,
            searchValue: "",
            inStock: false
        }
    }

    searchProduct = (e) => {
        
        let value
        if(e.target) value = e.target.value
        else value = e

        let valueUpper = value.slice(0,1).toUpperCase() + value.slice(1,value.length)
        let productsCopy = [...this.state.products]

        productsCopy = productsCopy.filter (product => {
            if(this.state.inStock){
                return (product.name.includes(value) || product.name.includes(valueUpper)) && product.stocked
            } else {
                return product.name.includes(value) || product.name.includes(valueUpper)
            }
        })

        this.setState({
            filtered: productsCopy,
            searchValue: value
        })       
    }

    filterProduct = (e,newSearchValue) => {
        let {checked} = e.target
        if (checked) {
            this.setState({
                inStock: true,
            })       
        } else {
            this.setState({
                inStock: false,
            })  
        }
        this.searchProduct(this.state.searchValue)
    }

    render () {
        return (
            <main className="app">
                <h1>IronStore</h1>
                <nav className="search">
                    <SearchBar searchValue={this.state.searchValue} searchProduct={this.searchProduct} filterProduct={this.filterProduct}/>
                </nav>
                <section className="product-table">
                    <ProductTable products={this.state.filtered}/>
                </section>
            </main>
        )
    }
}

export default FilterableProductsTable