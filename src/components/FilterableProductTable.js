import React from 'react'

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component{

    state = {
        products: this.props.products,
        comparativeProducts: this.props.products
    }

    filterSearch(e){
        const value = e.target.value.toLowerCase()
        const filteredProducts = this.state.products.filter((product)=>{
            return product.name.toLowerCase().includes(value)
        })
        this.setState({...this.state, comparativeProducts: filteredProducts})
    }

    render(){
        return(
            <div className="FilterableProductTable">
                <h1>IronStore</h1>
                <SearchBar 
                products={this.state.products}
                filterSearch={(data)=>this.filterSearch(data)}
                />

                <ProductTable 
                products={this.state.comparativeProducts}
                />
            </div>
        )
    }
}

export default FilterableProductTable
