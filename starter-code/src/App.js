import React, { Component } from 'react';
import './App.css';
import {data} from './data.json';
import Input from './components/Input'
import ProductTable from './components/ProductTable'

class App extends Component {
  constructor(props){
super(props)
this.state={
  search:"",
  selected:false,
  dataCopy:data
}
  }
handleInputState =(e)=>{
this.setState({
  search:e.target.value 
})

}
handleCheckState =(e)=>{
  this.setState({
    selected:!this.state.selected
  })

  }
  
  render() {
   
    return (
      <div className="block">
      <div>
      <Input className="zones" type="text" onChange={(e)=>this.handleInputState(e)} placeholder="Search"/>
       <Input className="zones" type="checkBox" onChange={(e)=>this.handleCheckState(e)} placeholder="" text="Only show products in Stock"/>
      </div>
      
       <ProductTable  className="zones" state={this.state}  />
      </div>
    );
  }
}

export default App;
