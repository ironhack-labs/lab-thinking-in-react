import React, { Component } from 'react';
import ProductTable from './ProductTable';
import Data from './data.json';

class Main extends Component {

  state = {
    allTheData: Data,
    theDataArray: [],
    availableProducts: []
  }




  render() {
    return (
      <div>
      <ProductTable theDataAll={this.state.allTheData.data.name}/>



      </div>
    );
  }
}

export default Main;
