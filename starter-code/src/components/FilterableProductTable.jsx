import React, {Component} from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends Component {
  state={
      itemToSearch : '',
      elements: this.props.data
  } 
  search(str){
    
      this.setState({
        itemToSearch : [...this.state.itemToSearch , str]
    })
  }
  itemsToSeach = ()=>{
    console.log("holas")
  }
    render(){
        return(
            <div className="FilterableProductTable">
                <h1>IronStore</h1>
                <SearchBar itemSeach={this.search}/>
                <ProductTable products={this.props.data} filterProducts={this.itemsToSeach}/>

            </div>
            
        )
    }
}
export default FilterableProductTable
