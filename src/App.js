import React from 'react';
import listOfProducts from "./data.json"
// import SearchBar from './components/SearchBar';
// import ProductTable from './components/ProductTable';
// import ProductRow from './components/ProductRow';
import FilterableProductTable from "./components/FilterableProductTable"
import './App.css';
//import { json } from 'body-parser';

class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalProducts : listOfProducts.data

      
    };
  }




  render() {

    return (
      <div className="App">
          <FilterableProductTable/>
          {/* {console.log("totalproducts", this.state.totalProducts)}               */}
      </div>
    );

  }
  
}

export default App;
