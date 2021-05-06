import React, {Component} from 'react';

export default class SearchBar extends Component {
    // changeHandler = event=>{
    //     props.changeHandler(event)
    // }
    handleChange = event =>{
        this.props.changeHandler(event.target)
    }

    handleCheck = event =>{
        this.props.checkHandler(event.target.checked)
    }

    handleSubmit = event =>{
        this.props.submitHandler(event.target.value)
    }
 render(){
    
    return (
        <div className="SearchBar">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="search">Search</label>
            <input type="text" name="search" id="search" value={this.props.search} onChange={this.handleChange} />
            <label htmlFor="stocked">Only see In stock items</label>
            <input type="checkbox" name="stocked" id="stocked" checked={this.props.inStock} onChange={this.handleChange}/>
          </form>
        </div>
      );
 }
  
}
