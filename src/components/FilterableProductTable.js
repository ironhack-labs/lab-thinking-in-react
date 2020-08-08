import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export class FilterableProductTable extends Component {
    constructor(props){
        super(props)
        this.state= {
            filtro:''
        }
        this.filtrar = this.filtrar.bind(this)
    }
    filtrar(filtro){
        console.log("filtrar", filtro)
        this.setState({filtro: filtro})
    }

    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar callbackFunction={this.filtrar}/>
                <ProductTable products={this.props.products} filtro={this.state.filtro}/>
            </div>
        )
    }
}

export default FilterableProductTable
