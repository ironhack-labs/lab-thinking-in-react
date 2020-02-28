import React, {Component} from 'react';

class SearchBar extends Component{
 
  state={
    itemToSearch:''
  }
  
  sendData=(e) =>{
    this.setState({itemToSearch: e.target.value})
    this.props.search(e.target.value)
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
              value={this.state.itemToSearch}
              onChange={ (e) => this.sendData(e)}
            />
          </form>
         
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