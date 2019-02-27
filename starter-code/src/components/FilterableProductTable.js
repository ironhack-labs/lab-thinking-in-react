import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends Component {

    state = {
        products :[],
        productsBackup: []
        
    }


    componentWillMount(){
        this.setState({products: this.props.products, productsBackup:this.props.products})
    }

    cambiarProduct= (value) => {
        //cojes
        const {products, productsBackup} = this.state
        // let { product } = this.state
        // product[e.target.name] = e.target.value
        // this.setState({product})
        if(value.lenth<1)  {
            console.log(this.state)
            this.setState({products: {...this.state.productsBackup}})
            return
        }
        let filtered = productsBackup.filter(item=>item.name.toLowerCase().includes(value.toLowerCase()))
        this.setState({products: filtered})
    }

    render(){
        const {products} = this.state
        
        return(
            <div>
                <SearchBar cambiarProduct={this.cambiarProduct} />
                <ProductTable products={products}/>
            </div>
        )
    }
}

export default FilterableProductTable



    