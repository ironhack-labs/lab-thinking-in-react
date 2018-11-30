import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from './data.json';
import SearchBar from "./Components/SearchBar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: data,
      name: "",
      stock: false
    }
  }

  updateSearch(event) {
    const { name, value } = event.target;

    let dataCopy = data.filter(oneData => oneData.name.toLowerCase().match(value.toLowerCase()));

    this.setState({[name]: value, products: dataCopy });
  }

  inStock(event) {
    const { checked } = event.target;

    if (checked) {
      let dataCopy = data.filter(oneData => oneData.stocked);
      this.setState({ stock: true, products: dataCopy });
    }
    else {
      this.setState({ stock: false, products: data });
    }
  }

  render() {
    const products = this.state.products
    
    const dataHtml = products.map((oneSub) => {
      return ( 
        <li>
          <p>Category: <b>{oneSub.category}</b></p>
          <p>Name: {oneSub.name}</p>
          <p>Price: {oneSub.price}</p>
          <p>{oneSub.stocked}</p>
        </li>
      )}
    );
    
    return (
      <section>
        <h2>Thinking in React</h2>

        <SearchBar name={this.state.name} updateSearch={event => this.updateSearch(event)} inStock={event => this.inStock(event)} />
        <ul>
          <h3>The products we have</h3>
          { dataHtml }
        </ul>
      </section>
    )

  }
}

export default App;
