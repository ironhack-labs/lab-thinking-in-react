import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import FilterableProductTable from './component/FilterableProductTable';
import data from './data.json'


class App extends Component {

  data = data.data

  state = {
    searchProducts: this.data,
  }

  handleSearchProducts = (text, isChecked) => {
  /*   ESTO NO ME SALE....
    (isChecked)
      ? this.setState({searchProducts: this.data.filter( e => e.stocked === true )})
      : this.setState({searchProducts: this.data}) 
 */
    (text.length<1) 
      ? this.setState({searchProducts: this.data}) 
      : this.setState({searchProducts: this.data.filter(e => e.name.toLowerCase().includes(text.toLowerCase()))})
  }

  render() {

    return (
      <div className="App px-3">
        <FilterableProductTable products={this.state.searchProducts} onSearch={this.handleSearchProducts}/>
      </div>
    );
      }
    }
    
    export default App;
