import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import data from './data.json'
import ProductCategory from './components/ProductCategory';
import ProductRow from './components/ProductRow';

class App extends Component {
  state = {
    data: data.data,
    query: {
      text:"",
      field:"",
      checked: false
    },
    categories:[]
  }

  componentWillMount = () => {
    this.getCategories()
  }

  searchQuery = (e) => {
    let {query} = this.state
    query.text = e.target.value
    query.field = e.target.name
    if(query.field != 'search') query.checked = false
    if(e.target.checked) query.checked = true
    this.setState({query})
  }

  drawTable = () => {
    let { categories, data, query } = this.state
    let que = {
      "query": query
    }
    return categories.map((item,index) => {
    let object = {
      "data":data,
      "item" : item
    }
    return <ProductCategory key={index} {...que} {...object}/>
  })
  }

  getCategories = () => {
    let {data, categories} = this.state
    data.map((item,index) => {
    let category = item.category
    if(categories.indexOf(category) === -1) categories.push(category)
    })
    this.setState({categories})
  }

  render() {
    const { data, query, categories } = this.state
    const { searchQuery, drawTable } = this
    return (
      <div className="App">
        <h1>Thinking in react</h1>
        <SearchBar searchQuery={searchQuery} {...query} {...data} />
        <table>
          {drawTable()}
        </table>
      </div>
    );
  }
}

export default App;
