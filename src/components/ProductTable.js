import React, { Component } from 'react';

import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export default class ProductTable extends Component {
  constructor({visibleProducts}){
    super();
    this.useless= 0;
    this.state = {
      products: {}
    };
  }
  
  render(){
    return (
      <div>
        <div className="section columns" style={{margin:"0",
    padding: "0 24px",}}>
          <div className="column">
            <p className="title is-1">Name</p>
          </div>
          <div className="column">
            <p className="title is-1">Price</p>  
          </div>
        </div>
        {Object.keys(this.state.products).map(e => {
          return (
            <div className="section" key={e}>
              <ProductCategoryRow category={e}/>
              {this.state.products[e].map(product => <ProductRow {...product} key={product.name}/>)}
            </div>
          )
        })}
      </div>
    )
  }

  componentDidMount(){
    let products = this.structureProducts(this.props.visibleProducts);
    this.setState({products: products})
  }

  componentDidUpdate(prevProps){
    if (this.props !== prevProps){
      let products = this.structureProducts(this.props.visibleProducts);
      this.setState({products: products})
    }
  }

  structureProducts = (products) => {
    let arrangedProducts = {}
    products.forEach(e => {
      let {category, price, stocked, name} = e
      if (!Object.keys(arrangedProducts).includes(category)){
        arrangedProducts[category] = new Array({name, price, stocked})
      } else {
        arrangedProducts[category].push({name, price, stocked})
      }
    })
    return arrangedProducts;
  }

}

