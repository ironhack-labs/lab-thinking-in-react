import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//Components
import YellowSquare from './Components/SquareDisplay';
import Category from './Components/CategoryRow';
import Row from './Components/Row';
import Table from './Components/GreenBox';
import SearchPurple from './Components/SearchPurple';
//data
import Data from './data.json';

class App extends Component {
state = {
  search: ""
}

handleSearch = (event) => {

}


  render() {

    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Laboratorio IronHack</h1>
      </header>
      <p className="App-intro">
        Lab-Thinking-inReact
        <code>/Tabla de Colores</code>
        Push and commit
      </p>
      <div className="container">
        <div className="Yellow-one">
          <YellowSquare handleSearch={this.handleSearch}/>
        </div>
      </div>
    </div>);
  }
}

export default App;
