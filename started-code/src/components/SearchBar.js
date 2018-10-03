import React from 'react';
import 'bulma/css/bulma.css';

export class SearchBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    };
  }
   render(){
     return (
       <div>
      <input className="input" type="text" placeholder="Text input"/>
      <label className="checkbox"><input type="checkbox"/>Only show products in stock</label>
      </div>
     )
   }







}