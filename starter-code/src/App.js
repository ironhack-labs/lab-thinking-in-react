import React, { Component } from 'react';
import json from './data.json'
import Store from './components/store/Store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Store products={ json } />
      </div>
    );
  }
}

export default App;