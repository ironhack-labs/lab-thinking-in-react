import React, { Component } from 'react';
import './productTable.css';
import ProductRow from '../productRow/ProductRow';

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state ={
      hasElectronics: true,
      hasSportGoods: true,
     
    }
  }

 
  

  showProductRow(what) {

    let newArr = {
      electronics: [],
      sport: []
    };
    
    this.props.products.forEach(eachProduct => {
      if(eachProduct.category == "Sporting Goods") {
        newArr.sport.push(eachProduct)
        
      } else {
        newArr.electronics.push(eachProduct)
      }
    })

    if(newArr.electronics.length > 0) {
      newArr.electronics.unshift({
        name: 'Electronics',
        price: '',
        stocked: true,
        isCategory: true
      })
    }

    if(newArr.sport.length > 0) {
      newArr.sport.unshift({
        name: 'Sport goods',
        price: '',
        stocked: true,
        isCategory: true
      })
    }

    return newArr[what]
    .filter(eachProduct=> {
      if(this.props.showInstockOnly) {
        return eachProduct.stocked
      } else {
        return true
      }
    })
    .map((eachProduct, i) => {
        return (
          <ProductRow key={i} name={eachProduct.name} price={eachProduct.price} inStock={eachProduct.stocked} isCategory={eachProduct.isCategory}/>
          )
    })
  }

  render() {
    return (
      <div>
        <div className="table-header">
          <h6 className="title is-size-6 inline">Name</h6>
          <h6 className="title is-size-6 inline">Price</h6>
        </div>
          <div className="container">
            
            {this.showProductRow('electronics') }

            {this.showProductRow('sport')}

          </div>
      </div>
    );
  }
}

export default ProductTable;


