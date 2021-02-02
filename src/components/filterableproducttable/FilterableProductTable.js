import React, { Component } from 'react'
import SearchBar from '../searchbar/SearchBar'
import ProductTable from '../producttable/ProductTable'
import productData from '../../data.json'

export default class FilterableProductTable extends Component {
    constructor(props){
        super(props)
        this.state={
            products: this.props.products
        }
    }

    filterProducts=(searchVal)=>{
        if(searchVal !== ''){
            const allProducts = [...this.props.products]
            //loop through array, if search value is in name then bring it back.
            const searchMatch = allProducts.filter(el => (el.name.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1))
            this.setState({products:searchMatch})
          }else{
            this.setState({products:productData['data']})
          }
    }

    render() {
        return (
            <div>
                <SearchBar updateSearch={this.filterProducts}/>
                <ProductTable products={this.state.products} />
            </div>
        )
    }
}
