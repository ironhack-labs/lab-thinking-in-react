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
    // console.log(this.state.storeList)
  }

  searchProduct = (word) => {
    let results = []
    data.data.find(elm => {
      if(elm.name.includes(word)) 
      results.push(elm)
    })
    this.setState({
      storeList: results
    })
  }

      render(){
        return (
          <div>
              <h1>IronStore</h1>
              <div>
                <Search search={this.searchProduct}/>
                <ProductTable pepe={this.state.storeList} />
              </div>
            </div>
        )
      }
}




export default FilterableProductTable