import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import data from '../data.json';
import './Table.css'


// let allProducts = data.data

export default class FilterableProductTable extends Component {
    constructor(){
        super()
        this.state = {
            product: data.data
        }
    }
    //Filter
    productFilter(e){
        const newState = {...this.state};
        let input = e;
        newState.product = data.data.filter(function(filtro){
           return filtro.name.includes(input)
        })
        this.setState(newState);

    }
    productFilterChecked(e){
      const newState = {...this.state};
      let input = e;
      console.log(input)
      newState.product = data.data.filter(function(filtro){
        if(!input){ 
          return filtro
        } else {
          
          return filtro.stocked === input
        }
      })
      this.setState(newState);

  }

  render() {
    return (
        <React.Fragment>
          <div className="contentbox">
            <SearchBar new={e => this.productFilter(e)} check={e => this.productFilterChecked(e)}/>
            </div>
            <div className="contentbox">
            <ProductTable products={this.state.product}/>
            </div>
        
      
      </React.Fragment>
    )
  }
}
