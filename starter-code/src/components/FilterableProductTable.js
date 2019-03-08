import React, { Component } from "react";
import SearchBar from './SearchBar'
import ProductTable from "./ProductTable"


class FilterableProductTable extends Component {

    constructor(props){
        super(props)
        this.state = {
            productsArray : this.props.products,
            product: "",
            filter: ""
        }
    }

    filter = products => {
       this.setState({
           product: products
       }) 
       console.log(this.state.product)
       const arrayOfProds = this.state.products
       const filter = arrayOfProds.filter( element => {
           return element.name.toLowerCase().indexOf(products.toLowerCase()) > -1;
       })

       this.setState({
           filter : filter
       })
    }

    render(){
        let prods = this.state.arrayOfProds
        let newTable = this.state.filter
        let completeTable = this.state.productsArray
        let tableRender = newTable !== "" ? newTable : completeTable
        return(
            <div>
                <h1 style={{marginTop: '20px', textAlign: "center"}}>IronStore</h1>
                <SearchBar filterProductSearch={product => this.filter(product)} products={prods}/>
                    <br/>
                <ProductTable products={tableRender}/>
            </div>
        )
    }
}

export default FilterableProductTable
