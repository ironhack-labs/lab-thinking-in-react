import React, {Component} from 'react';

class SearchBar extends Component{
 
  state={
    itemToSeach:''
  }
  handleChange = (e) =>{
     this.setState({
      itemToSeach: e.target.value
    })
  
  }
  sendData=(e) =>{
    this.handleChange(e) 
    let item = document.getElementById("itemToSearch").value
    return this.props.search(item)
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
              id="itemToSearch"
              value={this.state.itemToSeach}
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