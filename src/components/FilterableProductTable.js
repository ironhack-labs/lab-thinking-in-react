import React,{ Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
 
class FilterableProductTable extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            search: "",
            filterProducts: this.props.products.data,
            isStock: false
        }
    }

    filterProduct = filterWord => {

        this.setState({search: filterWord})
        const products = this.props.products.data
        let filterApplyProduct = products.filter(elm => elm.name.toLowerCase().includes(filterWord.toLowerCase()))
        this.setState({ filterProducts: filterApplyProduct })
    }

    productStock = isStocked => {
        this.setState({ isStock: isStocked })
        const products = this.props.products.data
        if (isStocked) {
            let filterStockProduct = products.filter(elm => elm.stocked === isStocked)
            this.setState({ filterProducts: filterStockProduct }) 
        }     
    }
 
    render() {
 
        return (
            <>
                
                <SearchBar search={this.state.search} filterProduct={this.filterProduct} isStock={this.state.isStock} productStock={this.productStock}/>
                <ProductTable products={this.state.filterProducts}/>
            </>
        )
    }
    }
export default FilterableProductTable