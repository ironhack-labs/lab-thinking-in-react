import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import data from './data.json';
import ProductRow from './ProductRow';
import Search from './Search'



class ProductList extends Component {
  constructor(props){
    super(props);
    this.state = {

      products: data.data,
      productList: data.data,
      checkbox: false,

    }
  }

  sortProduct = (sortBy) => {
    const sortedList = this.state.productList.filter((oneProduct)=>{
    //   if(this.state.checkbox){

    //     return oneProduct.sortBy === sortBy && oneProduct.name.toUpperCase().includes(this.props.searchTerm.toUpperCase()) && oneProduct.stocked === this.state.checkbox

    // }else{

    //     return oneProduct.sortBy === sortBy && oneProduct.name.toUpperCase().includes(this.props.searchTerm.toUpperCase())
    // }
      console.log(oneProduct)
      return oneProduct.category.toLowerCase().includes(sortBy.toLowerCase())
    })
    return this.showProduct(sortedList)
  }

  searchFunction = (searchTerm) => {
    let theList = [...this.state.products];
    theList = theList.filter((eachProduct)=>{
      return eachProduct.name.toUpperCase().includes(searchTerm.toUpperCase())
    })

    this.setState({productList: theList});
  }

  showProduct = (productList) => {
    const rStyle = {
      color: 'red'
    }
    const bStyle = {
      color: 'black'
    }

    return productList.map((eachProduct, index)=>{
      return(
      <ProductRow 
      name = {eachProduct.name} 
      price = {eachProduct.price} 
      key = {index}
      myColor = {eachProduct.stocked ? bStyle : rStyle}
      />
      )
    })
  }

  updateCheckBox = (e) =>{
    this.setState({checkbox: e.target.checked})
  }

  render() {
    return (
      <div>


<Search mySearch={this.searchFunction} />

<br/>

  <input type="checkBox" onChange = {e => this.updateCheckBox(e)} checked={this.state.checkbox}/>
  <label> Only show products in stock</label>


        <table className="table">

<thead className="thead-light">

  <tr>
    <th scope="col">Name</th>
    <th scope="col">Price</th>

  </tr>



  
{/* // {this.showProduct()} */}



</thead>

<div className = "category">
<tr><td>Electronics</td></tr>
{this.sortProduct('electronics')}

<tr><td>Sports Products</td></tr>
{this.sortProduct('Sporting Goods')}
</div>



</table>
{/* <ProductRow/> */}

      </div>
    );
  }
}

export default ProductList;
