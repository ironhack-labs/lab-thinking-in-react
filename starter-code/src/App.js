import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Products from './data.json';
import List from './components/List';

class App extends Component {

  state = {
    products:Products.data,
    word:'',
    stocked:false,
    find:Products.data}

    handleChangeSearch = e => {
      let {products, word, find} = this.state;
       word = e.target.value;
      let enc = products.filter(function (elemento) {
      if(elemento.name.toUpperCase().indexOf(word.toUpperCase()) > -1) 
      {return elemento}
      });
      find = enc;
        this.setState({ find, word});
      };

      handleCheck = e =>{
        let {stocked} = this.state;
         stocked ? stocked = false : stocked = true;
         this.setState({stocked});
      }


  render() {
    let {products}= this.state
    let {find} = this.state;
    return (
      <div className="App">
          <div className='title'>IronStore</div>
          <Search handleChangeSearch={this.handleChangeSearch} handleCheck ={this.handleCheck}/>
         <div className='t'><List {...this.state}/></div> 
      </div>
    );
  }
}

export default App;
