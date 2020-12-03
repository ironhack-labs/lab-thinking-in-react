import React, {Component} from 'react';
import SearchBar from './../searchBar/SearchBar'
import ProductTable from './../productTable/ProductTable'
import data from '../../data.json'


class FProductTable extends Component {

    constructor() {
        super()
        this.state = {
          data: data.data, 
          filteredData: data.data
        }
        
        }
    
search = value => {
    
    const copyData= data.data
    console.log(data)
    const found = copyData.filter(element => element.name.includes(value) )
    this.setState({filteredData:found})
    console.log('hola', found)
  
}

    render() {
console.log(this.state.data)
console.log('consolelog2', this.state.filteredData)
        return (

            <>
            <div>
            <h1>IronStore</h1>
            </div>
            <div>
            <SearchBar  search={this.search} />
            </div>
            <div>
            <ProductTable found={this.state.filteredData}/>
            </div>

            </>
        )
    }

}

export default FProductTable
