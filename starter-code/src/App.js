import React, { Component } from 'react';
import './App.css';
import SearchForm from "./components/SearchForm/SearchForm";
import SearchResult from "./components/SearchResult/SearchResult";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchForm/>
        <SearchResult/>
      </div>
    );
  }
}

export default App;
