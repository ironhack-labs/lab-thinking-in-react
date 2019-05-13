import React, { Component } from 'react'
import {data} from '../data.json'

export let copy = [...data]

class SearchBar extends Component {

  searchProduct = e => {
   const query = (e.target.value).toLowerCase()
   const filteredProduct = copy.filter(prod => ((prod.name).toLowerCase()).includes(query))
   copy = filteredProduct
   console.log(copy)
   return(copy)
 }

 render() {
   return (
    <div>
      <input id="search" placeholder="Search" onChange={this.searchProduct} />
    </div>
   )
  }
}

export default SearchBar