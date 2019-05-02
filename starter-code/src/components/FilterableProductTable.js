import React from "react";
import "./FilterableProductTable.css";
import SearchBar from "./SearchBar.js";
import ProductTable from "./ProductTable";

class FilterableProductTable extends React.Component {
  constructor(props){  
    super(props);
    this.state = {
      products: props.products.data,
      productsFiltrados : props.products.data,
      searchValue :"",
      filterInStock: false
    };    
  }

  changeFormData = (e, key)=>{   
    let valorFiltrado = "";
    let valorStocked = false;
    
    if(e.target.type === "text"){
      valorFiltrado = e.target.value.toLowerCase();
    }else{
      valorFiltrado = this.state.searchValue;
    }
    
    if(e.target.type === "checkbox"){
      valorStocked =  e.target.checked  ;
    }else{
      valorStocked = this.state.filterInStock;
    }

    let productsFiltrados = this.state.products.filter((item)=>{
        return item.name.toLowerCase().startsWith(valorFiltrado)   ;
    }); 

    if(valorStocked === true){
      productsFiltrados = productsFiltrados.filter((item)=>{
        return item.stocked;
      }); 
    }

    this.setState({
      ...this.state,
      searchValue: valorFiltrado,
      productsFiltrados: productsFiltrados,
      filterInStock: valorStocked}
      );
  }


  render() {
    return (      
      <React.Fragment>        
        <p id="title">Ironstore</p>  
        <SearchBar searchFunc={this.changeFormData} valueSearch={this.state.searchValue}/>
        <div>
          <input id="inStock" type="checkbox" onChange={this.changeFormData}/><label for="inStock">Only show products on stock.</label>         
        </div>        
        <ProductTable datos={this.state.productsFiltrados}/>
      </React.Fragment> 
    )
  }
}

export default FilterableProductTable;