import React, { Component } from 'react';
import './App.css';
import data from './data.json'
import SearchBar from './Components/SearchBar'
import ProductRow from './Components/ProductRow'
import ProductCategory from './Components/ProductCategory'

class App extends Component {
  state = {
    data: data.data,
    query: {
      text:'',
      field:'',
      checked: false
    },
    categories:[]
  }

  ComponentWillMount=()=>{
    this.getCategories()
  }

  searchQuery=(e)=>{
    let {query}= this.state
    query.text = e.target.value 
    query.field = e.target.name 
    if(query.field != 'search') query.checked = false
    if(e.target.checked) query.checked = true
    this.setState({query})
  }

  drawTable=()=>{
    let{categories,data,query}= this.state
    let q = {
      'query': query
    }
    return categories.map((item,index)=>{
      let object = {
        'data':data,
        'item':item,
      }
      return <ProductCategory key={index} {...q} {...object}/>
    })
  }

  getCategories = ()=>{
    let{data,categories} = this.state
    data.map((item,index)=>{
      let category = item.category
      if(categories.indexOf(category) === -1)categories.push(category)
    })
    this.setState({categories})
  }


  render() {
    const {data, query, categories} = this.state
    const {searchQuery, drawTable} = this
    return (
      <div className="App">
        <h1>Thinking in React</h1>
        <SearchBar searchQuery={searchQuery}{...query}{...data}/>
        <table>
          {drawTable()}
        </table>   
      </div>
    );
  }
}

export default App;
