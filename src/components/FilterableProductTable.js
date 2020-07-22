import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'


export class FilterableProductTable extends Component {

    constructor(props){
        super(props)
        this.state={
            filtro:"",
            stock:""
        }
        this.filtrar=this.filtrar.bind(this)
        this.filtrarStock=this.filtrarStock.bind(this)
    }
    //1-cp,p utilizar las props filtro

    filtrar(filtro){
        console.log("componendte padre, filtrar:", filtro)
        this.setState({filtro:filtro})
    }
    //this.props.products>>>los datos 

    filtrarStock(stock){
        this.setState({stock:stock})
    }

    render() {
        return (
            <div>
                <SearchBar callbackFuntion={this.filtrar} functionStock={this.filtrarStock}/>
                <ProductTable products={this.props.products} filtro={this.state.filtro} stock={this.state.stock} />
            </div>
        )
    }
}

export default FilterableProductTable
