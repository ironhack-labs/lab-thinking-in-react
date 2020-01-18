import React, { Component } from 'react';
import data from './data.json';
import FilterTableProductTable from './components/FilterTableProductTable';
import SearchBar from './components/SearchBar';
import CheckboxFilter from './components/CheckboxFilter';
import './App.css';

export default class App extends Component {
  state={
    filtred: data.data,
    original: data.data,
  }

  handleFilter = (value) => {
    const product = value.target.value;
    const filtredItem = this.state.original.filter((item)=>{
      return item.name.includes(product);
    });
    this.setState({
        filtred: filtredItem
    })
  }
  handlerForCheckbox = () => {
    let checkbox = document.querySelector("#root > div > div:nth-child(3) > input[type=checkbox]").checked;
    const filtredCheckbox = this.state.original.filter((item)=>{
      return item.stocked === true
    });

    checkbox ? this.setState({filtred: filtredCheckbox}) : this.setState({filtred: data.data})

  }

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar filter={this.handleFilter} />
        <CheckboxFilter filter={this.handlerForCheckbox}/>
        <FilterTableProductTable products={ this.state.filtred }/> 
      </div>
    );
  }
}
