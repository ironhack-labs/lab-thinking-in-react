import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import dataOriginal from './data.json';


class App extends Component {
  state =  {
    data:[],
    isAvailable: false
  }

  componentDidMount() {
    this.setState({data:dataOriginal})
  }

handleChange = (e) => {
   let {value} = e.target
   
   let newData = dataOriginal.filter((item, index) => item.name.toLowerCase().includes( value.toLowerCase()) )
    console.log('el evento', dataOriginal, newData)

    this.setState({data: newData})
 }

 checkIs = () => {
   let {isAvailable} = this.state
   isAvailable = !isAvailable
   this.setState({isAvailable})
 }

  render() {
    let {handleChange, checkIs} = this
    return (
      <div className="App">
      <h1>IronStore</h1>
        <SearchBar handleChange= {handleChange} checkIs= {checkIs}/>
        <ProductTable data= {this.state.data} isAvailable={this.state.isAvailable}/>
      </div>
    );
  }
}

export default App;
