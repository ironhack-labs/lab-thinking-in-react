import React, { Component } from 'react';
import { data } from './data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';



class FilterableProductTable extends Component {
    state={
        products: data,
        originalProducts:data,
        query: '',
        checked: false
    }
    
    typingText = (event) => {
 
        let filteredProducts = this.state.originalProducts.filter((product)=>{
            return (
                product.name.includes(event.target.value)
            )
        })
        this.setState({
            query:event.target.value,
            products: filteredProducts
        })
    }

    onCheck = (e) => {
        /*
        if(this.state.checked){
            let filteredProducts = this.state.originalProducts.filter((product)=>{
                return (
                    product.stocked === true
                )
            })
            
        }*/
        this.setState({checked:!this.state.checked})


    }


    render() {
      return (
        <div >
         <SearchBar query={this.state.query} typingText={this.typingText} onCheck={this.onCheck}/>
         <ProductTable checked={this.state.checked} items={this.state.products} />
        </div>
      );
    }
  }
  
  export default FilterableProductTable;