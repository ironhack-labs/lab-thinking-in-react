import React from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends React.Component{
  constructor(props){
    super(props)
    this.state={
      products: props.products,
      stock: false
    }
  }

  searchHandler=(e)=>{

    let clonedState = {...this.state}
    clonedState.products = this.props.products.filter((products)=>{
     return products.name.toLowerCase().includes(e.toLowerCase())
    })

    this.setState(clonedState)
  }

  checkHandler = (e)=>{
    
  }

  render (){
    return(
      <div>
      <SearchBar filter={this.searchHandler}/>
      <ProductTable products={this.state.products}></ProductTable>
      </div>
    )
  }
}