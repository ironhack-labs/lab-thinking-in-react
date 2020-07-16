import React,{Component} from 'react';
import ProductTable from './ProductTable.js'
import SearchBar from './SearchBar.js'

 class FilterableProductTable extends Component {

    constructor(props){
        super(props)

        this.state={

            data:props.products
            
        }
    }

    render(){

  return (
    <div>
    
    <h1>IronStore</h1>
    
    <SearchBar />
    
    <ProductTable product={this.state.data}/> 
    </div>
  )
}
}
export default FilterableProductTable