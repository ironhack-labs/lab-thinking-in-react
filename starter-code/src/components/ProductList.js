import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import data from './data.json';
import ProductRow from './ProductRow';



class ProductList extends Component {
  constructor(props){
    super(props);
    this.state = {

      products: data.data,

    }
  }

  sortProduct = (sortBy) => {
    const sortedList = this.state.products.filter((oneProduct)=>{
      console.log(oneProduct)
      return oneProduct.category.toLowerCase().includes(sortBy.toLowerCase())
    })
    return this.showProduct(sortedList)
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

  render() {
    return (
      <div>


        <table className="table">

<thead className="thead-light">

  <tr>
    <th scope="col">Name</th>
    <th scope="col">Price</th>

  </tr>



  
{/* // {this.showProduct()} */}



</thead>

<tr><td>Electronics</td></tr>
{this.sortProduct('electronics')}

<tr><td>Sports Products</td></tr>
{this.sortProduct('Sporting Goods')}




</table>
{/* <ProductRow/> */}

      </div>
    );
  }
}

export default ProductList;
