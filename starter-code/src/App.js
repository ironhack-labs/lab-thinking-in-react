import React, { Component } from 'react';
import './App.css';

import data from './data/data.json';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import ProductRow from './components/ProductRow';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [...data.data],
      search: ''
    };
  }

  onSearch = search => {
    this.setState({ search });
  }


  render() {
    const productRow = this.state.data
      .filter(data => data.name.toLowerCase().includes(this.state.search.toLowerCase()))
      .map(data => (
        <ProductRow data={data} key={data.name} />
      ));

    return (
      <div className="App">
        <Header/>
        <section className="section">
          <div className="container">
            <SearchBar onSearch={this.onSearch}/>
            <ProductTable />
            <div className="columns">
              <div className="column">
                {productRow}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;