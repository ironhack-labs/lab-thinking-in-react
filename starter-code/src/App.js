import React, { Component } from 'react';
import data from './data.json';
import SearchBar from './components/SearchBar';
import List from "./components/List"

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      data : data.data.sort(),
      search: {
        keyword: "",
        stocked: false
      }
    }
  }

  searchChange = (e) => {
    let { search } = this.state;
    search.keyword = e.target.value.toLowerCase();

    this.setState({ search });
  }

  searchCheckbox = (e) => {
    let { search } = this.state;
    search.stocked = e.target.checked;

    this.setState({ search });
  }

  render() {
    let { data, search } = this.state;

    data = data.filter(i => i.name.toLowerCase().includes(search.keyword));
    search.stocked ? data = data.filter(i => i.stocked) : null;

    return (
      <div className="uk-container">
        <SearchBar searchChange={this.searchChange} searchCheckbox={this.searchCheckbox} />
        <List data={data} />
      </div>
    );
  }
}

export default App;
