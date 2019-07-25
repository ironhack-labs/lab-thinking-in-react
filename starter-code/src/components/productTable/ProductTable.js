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
          <ProductRow key={i} name={eachProduct.name} price={eachProduct.price} inStock={eachProduct.stocked}/>
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
            
          {this.state.hasElectronics && <div className="has-text-centered">Electronics</div>}
            {this.showProductRow('electronics') }

            {this.state.hasSportGoods && <div className="has-text-centered">Sport</div>}
            {this.showProductRow('sport')}

          </div>
      </div>
    );
  }
}

export default ProductTable;


