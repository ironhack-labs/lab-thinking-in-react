import React, { Component } from 'react';
import './App.css';

import List from './components/ListProducts'

class App extends Component {
  render() {
    return (
     <main>
       <h1>Iron Store</h1>
       
       <List/>
     </main>
    );
  }
}

export default App;
