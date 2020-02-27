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
    console.log(str)
    this.setState({
        itemToSearch : str
    })
    
  }
  itemsToSeach = ()=>{
    console.log("holas")
  }
    render(){
        return(
            <div className="FilterableProductTable">
                <h1>IronStore</h1>
                <SearchBar search={this.search}/>
                <ProductTable products={this.props.data} filterProducts={this.itemsToSeach}/>

            </div>
            
        )
    }
}
export default FilterableProductTable
