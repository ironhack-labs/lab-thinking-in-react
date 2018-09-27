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
      stocked:false,
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
      if (this.state.stocked) {
        return (oneProduct.stocked && oneProduct.category.toLowerCase().includes(sortBy.toLowerCase()))
      } else {
        return oneProduct.category.toLowerCase().includes(sortBy.toLowerCase())
      }
    })
   return this.showProducts(sortedList)
  }

  checkInputChange(event) {
    let newStatus = !this.state.stocked;
    this.setState({stocked: newStatus})
    console.log(event)
  }

  render () {
    return (
      <div className="row justify-content-center">
        <Search handleSearch={this.searchFunction}/>
        <div className="form-check col-8 my-2">
          <input type="checkbox" className="form-check-input" value="horns" name="check" 
          onChange = {e=>this.checkInputChange(e)}/>
          <label className="form-check-label" >Only show products on stock</label>
        </div>
      <table className="table col-8 my-2">
          <thead className="thead-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr><th colspan="2" >Electronics</th></tr>
            {this.sortProducts('electronics')}
          </tbody>
          <tbody>
            <tr><th colspan="2" >Sporting goods</th></tr>
            {this.sortProducts('Sporting Goods')}
          </tbody>
        </table>
      </div>
    )
  }

} 


export default ProductList;