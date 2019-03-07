import React, {Component} from 'react';

class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state = {
      ...this.props
    }
  }

  doSearching = () =>{
    if(document.getElementById('instock').checked){
      const stockedProducts = this.props.products.filter(product => product.stocked);
      this.state.filterUpdate(stockedProducts.filter((product) => {return product.name.toUpperCase().includes(document.getElementById('search').value.toUpperCase()); }));
    } else{
      this.state.filterUpdate(this.props.products.filter((product) => {return product.name.toUpperCase().includes(document.getElementById('search').value.toUpperCase()); }));
    } 
  }

  // handleSearchText = (e) => {
  //   if(document.getElementById('instock').checked){
  //     const stockedProducts = this.props.products.filter(product => product.stocked);
  //     this.state.filterUpdate(stockedProducts.filter((product) => {return product.name.toUpperCase().includes(e.target.value.toUpperCase()); }));
  //   } else{
  //     this.state.filterUpdate(this.props.products.filter((product) => {return product.name.toUpperCase().includes(e.target.value.toUpperCase()); }));
  //   }
  // }

  // handleSearchCheckBox = (e) => {
  //   if(document.getElementById('instock').checked){
  //     this.state.filterUpdate(this.props.products.filter(product => product.stocked));
  //   } else{
  //     this.state.filterUpdate(this.props.products);
  //   }
    
  // }

  // handleChange = () => {
  //   this.doSearching();
  // }

  render(){
    return (
      <div>
        <h3>Search</h3>
        <input type='text' onChange={this.doSearching} id='search'></input>
        <br></br>
        <input type='checkbox' onChange={this.doSearching} id='instock'></input>
        <label htmlFor='instock'>Only show products in stock</label>
      </div>
      
    );
    
  }
}

export default SearchBar;