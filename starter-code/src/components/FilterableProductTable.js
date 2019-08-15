import React, {Component} from 'react'
import Search from './SearchBar'
import data from '../data.json'
import ProductTable from './ProductTable'


class FilterableProductTable extends Component {
  constructor (){
    super()
    this.state = {
      storeList : data.data
    }
    console.log(this.state.storeList)
  }

      render(){
        return (
          <div>
              <h1>IronStore</h1>
              <div>
                <Search/>
                <ProductTable pepe={this.state.storeList}/>
              </div>
            </div>
        )
      }
}




export default FilterableProductTable