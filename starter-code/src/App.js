import React, { Component } from 'react';
import './App.css';
import Data from '../src/data.json';
import Product from './components/product/Product';
import Searchbar from './components/searchbar/Searchbar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: Data.data,
      visibleProducts: [],
      isChecked: false
    }; 
  }

  showProducts(){

    let productClones = this.state.visibleProducts.length > 0? [...this.state.visibleProducts]: [...this.state.products]

    return productClones.map((product, i)=>{
      return <Product key={i} name={product.name} price={product.price} />
    });

    // if(this.state.visibleProducts.length > 0){
    //   let productClones = [...this.state.visibleProducts];
    //   return productClones.map((product, i)=>{
    //     return <Product key={i} name={product.name} price={product.price} />
    //   });
    // }else{
    //   let productClones = [...this.state.products];
    //   return productClones.map((product, i)=>{
    //     return <Product key={i} name={product.name} price={product.price} />
    //   });
    // }
  }

  search(e){
    let visibleProducts;
    let searchWord = e.target.value;
    let productClones = [...this.state.products];

    if(this.state.isChecked){

      let inStock = productClones.filter((product, i)=>{
        return product.stocked === true;
      });

      visibleProducts = inStock.filter((product, i)=>{
        return product.name.toUpperCase().includes(searchWord.toUpperCase()) 
      });

    }else{

      visibleProducts = productClones.filter((product, i)=>{
        return product.name.toUpperCase().includes(searchWord.toUpperCase()) 
      });

    }

    return this.setState({visibleProducts: visibleProducts});

  }

  setIsChecked(e){
     return this.setState({isChecked: !this.state.isChecked})
  }

  render() {
    return (
      <div className="App">
        <Searchbar search={(e)=>{this.search(e)}} instock={(e)=>{this.setIsChecked(e)}} />
        {this.showProducts()}
      </div>
    );
  }
}

export default App;
