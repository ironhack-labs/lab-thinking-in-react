import React, { Component } from 'react';

class SearchBar extends Component {

  handleChange = (e)=>{
    var filtroProds =[];
    
    if(e.target.name === "inStock"){
      if(document.getElementById("inStock").checked){
        this.props.products.data.forEach(producto => {
          if(producto.name.toLowerCase().search(e.target.value.toLowerCase())!==-1 && producto.stocked===true){
            filtroProds.push(producto)
          }
        })
      }
      else{
        this.props.products.data.forEach(producto => {
          if(producto.name.toLowerCase().search(e.target.value.toLowerCase())!==-1){
            filtroProds.push(producto)
          }
        })
      }
    }

    if(e.target.name === "producto"){
      if(e.target.value ===''){
        filtroProds=this.props.products.data
      }      
      else{
      
        this.props.products.data.forEach(producto => {
          if(producto.name.toLowerCase().search(e.target.value.toLowerCase())!==-1){
            filtroProds.push(producto)
          }
        })
      }
    }    
    this.props.filtrado(filtroProds)
  }

  render() {
    return (
      <div className="App">
        <h4>Search</h4>
        <div>
        <input className="buscaprod" type="text" name="producto" onChange = {e => this.handleChange(e)}/>
        </div>        
        <input id="inStock" type="checkbox" name="inStock" value="" onChange = {e => this.handleChange(e)} /> Only show products on stock
      </div>       
    );
  }
}

export default SearchBar;