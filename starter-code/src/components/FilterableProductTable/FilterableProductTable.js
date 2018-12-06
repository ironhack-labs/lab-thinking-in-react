import React, { Component } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar'

export default class FilterableProductTable extends Component {
    constructor(props){
        super(props);
        this.state ={
            products: this.props.productsData,
            searchWord:''
        }
        console.log(this.props)
        console.log(this.state)
    }

    groupProducts = products=>{
        console.log("podisfghzpzdiougnadpògf")
        const groupedProducts = {};
        products.forEach(product => {
           if(groupedProducts[product.category]){
            groupedProducts[product.category].push(product);
           }else{
            groupedProducts[product.category] =[product]
           }
        });
        console.log(groupedProducts);   
        return groupedProducts;
      
    }

    handleChange =(event)=>{
        this.setState({...this.state,searchWord:event.target.value})
    }
    searchFilter(){
        let filteredProduct= this.state.products.filter(product=>{
            console.log(product.name, this.state.searchWord)
            if( product.name.match(new RegExp(this.state.searchWord,'i'))){
                return product
            }
        })
        console.log(filteredProduct);
        return filteredProduct;
    }
 
  render() {
     console.log(this.state.searchWord);
     let filteredProducts = this.searchFilter();
     console.log(filteredProducts);
    return (
      <div>
        <SearchBar  handleChange={this.handleChange} />
        <ProductTable  products={this.groupProducts(filteredProducts)} />
      </div>
    )
  }
}
