import React, { Component } from 'react';
import data from '../../data.json';
import ProductTable from '../productTable/ProductTable'
import SearchBar from '../searchBar/SearchBar'

class FilterableProductTable extends Component {
    
    constructor() {

        super()

    this.state = { 
        
        products: []
    
    }

    this.componentDidMount = () => { this.setState ({

        products: data.data

     })}

    this.handleChange = (elm) => {
        const {value} = elm.target
        let newValue = data.data.filter (elm => elm.name.toLowerCase().includes(value.toLowerCase()))
        this.setState = ({products: newValue})

    }

}

render () {

    return (

    
    <div> 
      
      <h1> Iron Store </h1>
       < SearchBar handleChange = {this.handleChange}/>
      < ProductTable products = {this.state.products}/>
     
    </div>
        
        )


}

}

export default FilterableProductTable;