import React, { Component } from 'react';
import data from './data.json'
import ProductRow from './ProductRow';
import Search from './Search';

class ProductList extends Component {
  constructor(props){
    super(props);
    this.state = { 
      products: data.data,
      filtered: data.data,
    }
  }

  searchFunction = (searchTerm)=>{
    let filteredList = [...this.state.products];
    filteredList = filteredList.filter((eachProduct)=>{
      return eachProduct.name.toUpperCase().includes(searchTerm.toUpperCase())
    })

    this.setState({filtered: filteredList});
  }

  showProducts = (productList) => {
    const rStyle = {
      color: 'red',
    };
    const bStyle = {
      color: 'black',
    };
    return productList.map((eachProduct, index)=>{
      // console.log('Each list ', eachProduct)
      return (
      <ProductRow
      key={index}
      name={eachProduct.name} 
      price={eachProduct.price}
      myColor={eachProduct.stocked ? bStyle : rStyle}
      />
      )
    })
  }

  sortProducts = (sortBy) => {
    const sortedList = this.state.filtered.filter((oneProduct)=> {
      return oneProduct.category.toLowerCase().includes(sortBy.toLowerCase())
    })
   return this.showProducts(sortedList)
  }

  render () {
    return (
      <div>
        <Search handleSearch={this.searchFunction} />
      <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tr> <th>Electronics</th></tr>
          {this.sortProducts('electronics')}
          <tr><th>Sporting goods</th></tr>
          {this.sortProducts('Sporting Goods')}
        </table>
      </div>
    )
  }

} 


export default ProductList;