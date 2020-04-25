import React, { Component } from 'react';
import dataOriginal from "./data.json"
import './App.css';
import SearchBar from './components/Searchbar/SearchBar';
import Table from './components/table/ProductTable';


//esta es la filterable product table 
// <FilterableProducts products={ data } />  

export default class App extends Component {
  state={
    
    data: []
} 

componentDidMount(){
  this.setState( {data:dataOriginal}     )  }


  handleChange= (e) => {console.log ("el evento", e.target.value) 
  let {value} = e.target
  


  let newData = dataOriginal.filter( (item,index ) => item.name.toLowerCase().includes(value.toLowerCase()   )    )

  this.setState( {data:newData} )
}


  render() {
    let {handleChange} = this

    return (


      <div className="App">
        
       <h1>IronStore</h1>
        <SearchBar handleChange= {handleChange}/> 
        <Table data={this.state.data} />






       
          
         
        
       






      </div>
    );
  }
}
