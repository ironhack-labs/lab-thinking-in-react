import React, { Component } from 'react';

import ProductCategoryRow from "./ProductCategoryRow.js";
import ProductRow from "./ProductRow.js";

import './ProductTable.css';

function compare(a,b){
  const itemA = a.category.toUpperCase();
  const itemB = b.category.toUpperCase();

  let comparaison = 0;

  if (itemA > itemB){
    comparaison = 1;
  } else if (itemA < itemB){
    comparaison = -1;
  }
  return comparaison;
}

class ProductTable extends Component{

  componentWillMount(){
    console.log(this.props.displayItem)
    console.log(this.props.displayItem.sort(compare))
  }

  render(){
    let tempoData = "";
    const { displayItem } = this.props;

    const productHtml = 
      displayItem.map((oneProduct, index) => {
        if(oneProduct.category != tempoData){
          tempoData = oneProduct.category
          return(
            <div>
              <div>
                <li>
                  <ProductCategoryRow value={oneProduct}/>
                </li>
              </div>
                <li key={index}>
                  <ProductRow value={oneProduct} />
                </li>
            </div>
          )
        }
        else{
          tempoData = oneProduct.category
          return(
          <li key={index}>
             <ProductRow value={oneProduct} />
          </li>
          )
        }
        
      })

    return(
      <div className="productTable">
        <div className="properties">
          <h2>Name</h2>
          <h2>Price</h2>
        </div>
        <div className="content">

        <ul>
          {productHtml}
        </ul>

        </div>
      </div>

    )
  }
}

export default ProductTable;