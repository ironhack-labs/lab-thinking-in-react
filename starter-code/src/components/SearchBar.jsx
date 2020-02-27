import React, {Component} from 'react';

class SearchBar extends Component{
 
  state={
    itemToSeach:''
  }
  handleChange = (e) =>{
    //this.props.greet(e.target.value)
     this.setState({
      itemToSeach: e.target.value
    })
  
  }
  render(){
    return (
      <div>
        <div className="searchbar">
          <p>Search</p>
          <form>
            <input
              className="searchinputfield"
              type="text"
              value={this.state.itemToSeach}
              onChange={ (e) =>this.handleChange(e) }
            />
          </form>
         
          <button onClick={this.props.itemSeach}> Search</button>
          <div className="checkboxdiv">
            <input
              type="checkbox"
              name="checkbox"
             /*  checked={props.inStock}
              onChange={props.handleCheck} */
            />
            <label htmlFor="checkbox">Only show products on stock</label>
          </div>
        </div>
      </div>
    );
  };
  
}


export default SearchBar;