import React, { Component } from 'react';
import ProductRow from './ProductRow';




export default class ProductTable extends Component {
    render() {
      return (
        <div>
         {this.props.filteredProducts.map((product,id)=> {
         
         return <ProductRow product={product} key={id}/>
         }
         
         )}

        </div>
      );
    }
  }