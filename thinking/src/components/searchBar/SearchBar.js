import React, { Component } from 'react';

import './SearchBar.css';


class SearchBar extends Component {
  constructor(props) {
      super(props)
      this.state = {
            search : this.props.search
        
   }
}

    word = elem =>{
        elem.preventDefault()
        let {name} = elem.target
        let value = elem.target.type
        this.setState({[name]:value})
        this.props.filterState(this.state.search)
    }

        

  render(){
    console.log(this.props)
    return (
      <div>
        <form>
            <input type ='text' name= 'search' value = {this.state.value} ></input>
        </form>
        
      </div>
    );
  }

  }
  

export default SearchBar;