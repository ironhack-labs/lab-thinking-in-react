import React, { Component } from 'react';
import './ProductTable.css';
import Products from '../products/Products';


export default class ProductTable extends Component {
constructor(props){
    super(props)
}


allProducts(){
    return this.props.data.map((eachProduct, i)=>{
        
        return <Products key={i}
         name = {eachProduct.name}
         price = {eachProduct.price}
         category = {eachProduct.category}
         stocked = {eachProduct.stocked}
           />
      })
    }



render() {
    return (
        <div className ="items">

       {this.allProducts()}

        </div>

    );

    }
}