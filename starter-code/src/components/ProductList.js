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
      productList: data.data

    }
  }

  sortProduct = (sortBy) => {
    const sortedList = this.state.productList.filter((oneProduct)=>{
      console.log(oneProduct)
      return oneProduct.category.toLowerCase().includes(sortBy.toLowerCase())
    })
    return this.showProduct(sortedList)
  }

  searchFunction = (searchTerm)=>{
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

  render() {
    return (
      <div>


<Search mySearch={this.searchFunction} />


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
