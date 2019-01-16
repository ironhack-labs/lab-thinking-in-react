import React, { Component } from "react";
import "./App.css";
import data from "./data.json";
import SearchBar from "./components/SearchBar";
import { ProductTable } from "./components/ProductTable";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      productData: data.data,
      filterData : data.data
    };
  }
  // en el ejercicio anterior use las funciones 
  // componentDidMount() y componentWillReceiveProps(nextProps)
  // para asignarle a filterData el valor inicial y que cargue la lista en el primer render
  // la unica manera que se me ha ocurrido es pasarle como estado original tambien data
  // este estado es el que cambia la funcion handleFilter cada vez que buscamos en la barra de busqueda

  handleFilter(filtered){
    this.setState({filterData : filtered})
  }

  render() {
    return (
      <div className="App">
        <section className="section">
          <div className="container" id="FilterableProductTable">
            <SearchBar filtered={(filtered)=>this.handleFilter(filtered)} prodData={this.state.productData}/>
            <ProductTable prodData={this.state.filterData} />
          </div>
        </section>
      </div>
    );
  }
}
