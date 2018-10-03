import React, { Component } from 'react';
import './App.css';
import ProductTable from './components/Products/ProductTable';
import SearchBar from './components/Products/SearchBar';
import 'bulma/css/bulma.css';

class App extends Component {



  state = {
    search:'',
    data: [
      {"category": "Sporting Goods",  "price": "$49.99",    "stocked": true,    "name": "Football"},
      {"category": "Sporting Goods",  "price": "$9.99",     "stocked": true,    "name": "Baseball"},
      {"category": "Sporting Goods",  "price": "$29.99",    "stocked": false,   "name": "Basketball"},
      {"category": "Electronics",     "price": "$99.99",    "stocked": true,    "name": "iPod Touch"},
      {"category": "Electronics",     "price": "$399.99",   "stocked": false,   "name": "iPhone X"},
      {"category": "Electronics",     "price": "$199.99",   "stocked": true,    "name": "iPad Mini"},
      {"category": "Sporting Goods",  "price": "$199.99",   "stocked": true,    "name": "Tennis Balls"},
      {"category": "Electronics",     "price": "$199.99",   "stocked": true,    "name": "Huawei P10"}
    ]
  }

  //input

  onChange = (e) =>{
    
    const {value} = e.target
    console.log(value)
    this.setState({search:value})
}

  //cate
  handleCategory=(cat)=>{
    this.setState({search:cat})
  }

  render() {
    const {data, search} = this.state
    const filtered = data.filter(obj=>obj.name.toLowerCase().includes(search)||obj.category.toLowerCase().includes(search))
    console.log(search)
    return (
      <div className="App">
        <SearchBar data={filtered} onChange={this.onChange} onSearch={this.onSearch}/>
        <ProductTable data={filtered}  handleCategory={this.handleCategory}/>
      </div>
    );
  }
}

export default App;
