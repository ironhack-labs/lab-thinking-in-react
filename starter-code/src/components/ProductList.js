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

  showProduct = () => {
    return this.state.products.map((eachProduct, index)=>{
      return(
      <ProductRow 
      name={eachProduct.name} 
      price={eachProduct.price} 
      key = {index}
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


  
{this.showProduct()}



</thead>


</table>
{/* <ProductRow/> */}

      </div>
    );
  }
}

export default ProductList;
