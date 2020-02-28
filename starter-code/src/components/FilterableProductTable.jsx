import React, {Component} from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends Component {
    constructor(props) {
        super(props)

        // Bind the this context to the handler function
        this.search = this.search.bind(this);

        // Set some state
        this.state={
            itemToSearch : '',
            elements: this.props.data
        } 
    }
    
  search(str){
    this.setState({
        itemToSearch : str
    })
    
  }
  
  itemsToSeach = ()=>{
    let strToSearch = this.state.itemToSearch
    console.log(this.itemsToSeach)
  }
    render(){
        return(
            <div className="FilterableProductTable">
                <h1>IronStore</h1>
                <SearchBar search={this.search}/>
                <ProductTable products={this.props.data} filterProducts={this.itemToSearch}/>

            </div>
            
        )
    }
}
export default FilterableProductTable
