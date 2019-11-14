import React, { Component } from 'react';
import ProductTable from './Components/ProductTable/ProductTable';

import './App.css';
import dataJSON from './data.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: dataJSON
      // search: ''
    };
  }

  render() {
    return (
      <div className="App">
        <ProductTable products={dataJSON} />
      </div>
    );
  }
}
