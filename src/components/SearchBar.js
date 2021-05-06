import React, {Component} from 'react';

export default class SearchBar extends Component {
    // changeHandler = event=>{
    //     props.changeHandler(event)
    // }
    handleChange = event =>{
        this.props.changeHandler(event.target.value)
    }
 render(){
    
    return (
        <div className="SearchBar">
          <form onSubmit="">
            <label htmlFor="search">Search</label>
            <input type="text" name="search" id="search" value={this.props.search} onChange={this.handleChange} />
          </form>
        </div>
      );
 }
  
}
