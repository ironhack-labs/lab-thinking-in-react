import React, { Component } from 'react'
import products from '../../data.json'
import Row from './Row'
import Search from '../search/SearchBar'



class Table extends Component  {
    constructor() {
        super()
        this.state = {
            products : products.data
        }
    }
    filterProducts = search => {
    
        const filteredProducts= products.data.filter(elm => elm.name.toLowerCase().includes(search))
        this.setState({ products: filteredProducts })
        
    }
  render(){
    return (
        <>
            <Search filter={this.filterProducts}/>
         <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody>
                {this.state.products.map(elm => <Row key={elm.id} {...elm}/>)}
                

            </tbody>
            </table>
            </>
    )
      }
}

export default Table