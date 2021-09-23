import React from 'react'
import ProductTable from '../ProductTable/ProductTable'
import Searchbar from '../Searchbar/Searchbar'

export default class FilterableProductTable extends React.Component {

    constructor(props){

        super(props)

        this.state = {
            products: props.product
        }


    }


    filterProducts = (searchValue) => this.setState({
        products: this.props.product.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()))
    })
        

    
    render(){
        return (
            <div>
                <h1> IronStore </h1>
                <Searchbar filterProducts={this.filterProducts} />
                <ProductTable product={this.state.products} />
    
            </div>
        )
    }
}
