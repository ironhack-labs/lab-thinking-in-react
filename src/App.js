import React, { Component } from "react";
import logo from "./logo.svg"
import './App.css';
import Searchinput from './components/Searchinput';
import {Tables} from "./components/Tables.js"

class App extends Component {

state={
  store:dataInfo.data
}


handleChange = {event} =>{
  const {value,name} = event.target
  console.log("Que es ???",value,name);
  let newStore = store.filter((item,index)=> item.name.toLowerCase().includes(value.toLowerCase()))
  console.log("ggg");
  
}
    render (){
        return (
            <div ClassName="App">
                <div>
                    <span> Iron Store</span>
                </div>
                {/**
                 * aqui va el uscador 
                 */
                  
                }
                <Searchinput/>

                <Tables
                store={this.state.store}
                />
              </div>
        )
    }
}

export default App;
