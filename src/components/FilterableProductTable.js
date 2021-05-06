import React from 'react'

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component{

    state = {
        products: this.props.products,
        comparativeProducts: this.props.products,
        checked: false
    }

    filterSearch(e){
        const value = e.target.value.toLowerCase()
        const filteredProducts = this.state.products.filter((product)=>{
            return product.name.toLowerCase().includes(value)
        })
        this.setState({...this.state, comparativeProducts: filteredProducts})
    }

    changeCheck(){
        if (this.state.checked){
            const filteredProducts = this.state.products.filter((product)=>{
                return product
            })
            this.setState({...this.state, comparativeProducts: filteredProducts, checked: false})
        } else {
            const filteredProducts = this.state.products.filter((product)=>{
                return product.stocked
            })
            this.setState({...this.state, comparativeProducts: filteredProducts, checked: true})
        }
    }

    render(){
        return(
            <div className="FilterableProductTable">
                <h1>IronStore</h1>
                <SearchBar 
                products={this.state.products}
                filterSearch={(data)=>this.filterSearch(data)}
                />

                <input onChange={()=>this.changeCheck()} type="checkbox" name="onlyStock"/>
                <label htmlFor="onlyStock">Only show products on stock</label>

                <ProductTable 
                products={this.state.comparativeProducts}
                />
            </div>
        )
    }
}

export default FilterableProductTable
