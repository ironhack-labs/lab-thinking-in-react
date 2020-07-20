import React, { Component } from 'react'
import data from './data.json';
import './App.css';

import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import { v4 as uuid } from 'uuid';


const items = data.data.map(item => {
  return {...item, id: uuid()}
})


class App extends Component {

  state = {
    query: '',
    stocked: false,
  }

  handleInput = query => {
    this.setState({
      query: query
    })
  }


  render() {

      return (

           <div>
                <h1>IronStore</h1>
                <SearchBar 
                  query={ this.state.query } 
                  handleInput={ this.handleInput }/>

                <ProductTable 
                  products={ items } 
                  query={ this.state.query }/>

           </div>
      )
  }
}

export default App;