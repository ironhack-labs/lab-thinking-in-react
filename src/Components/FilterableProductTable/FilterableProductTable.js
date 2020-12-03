import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar'
import ProductTable from './ProductTable/ProductTable'
import CheckBox from '../CheckBox'
export default class FilterableProductTable extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            data:props.products,
            query:'',
            isStock:false
       }
   }
   
   setQuery = query => {
       this.setState({query:query})
   }

   setIsStock = query => {
       this.setState({isStock:query})
   }
    render() {
       
        return (
            <div>
            <SearchBar setQuery = {this.setQuery} query = {this.state.query}/>
            <CheckBox setIsStock = {this.setIsStock} check = {this.state.isStock} />
            <ProductTable query = {this.state.query}  data = {this.state.data} isStock = {this.state.isStock} />
            
            </div>
        )
    }
}
