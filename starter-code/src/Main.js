import React, { Component } from 'react';
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'



class Main extends Component {
  render() {
    return (
      <div className="yellowBox">  {/* yellow box */}
        < SearchBar />
        < ProductTable />
      </div>
    );
  }
}

export default Main;