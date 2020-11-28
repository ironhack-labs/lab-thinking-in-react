import React, { Component } from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import { Table } from './components/Table';
import dataInfo from './data.json'
// import infoData from './data.json'

class App extends Component {
  //Estados o funciones
  state={
    store:dataInfo.data
  }

handleChange = (event)=>{
  const {value, name}= event.target
  let {store}=this.state
  console.log("Que es lo que traigo", value, name)
  let newStore = dataInfo.data.filter((item, index)=>item.name.toLowerCase().includes(value.toLowerCase()))
  console.log("este es el nuevo arreglo", newStore)

  //Manipular el state, para filtrar en tiempo real 
  this.setState({store:newStore})
}

  render(){
    //Constantes y consoles
    return (
      <div className="App">
        <div>
          <span>Iron Store</span>
        </div>
        {/*Aquí va mi buscador*/}
        <SearchInput
          handleChange={this.handleChange}
        />
        {/* Aquí va mi tabla */}
        <Table
          store={this.state.store}
        />
      </div>
    );
  }
}

export default App; 