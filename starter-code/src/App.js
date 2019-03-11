import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Products from './components/Product';
import productStock from './data.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Products products={ productStock }/>
      </div>
    );
  }
}

export default App;
