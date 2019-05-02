import React from "react";
import "./SearchBar.css"

class SearchBar extends React.Component {
  constructor(props){  
    super(props);
    this.state = {
      searchFunc: props.searchFunc,
      searchValue: props.searchValue
    };
  }

    render() {
        return (
          <React.Fragment> 
          <input className="searchBar" 
            type="text" 
            name="searchValue" 
            placeholder="filter products"
            value={this.state.searchValue} 
            onChange={(e) => this.state.searchFunc(e, 'searchValue')}
             />
          </React.Fragment> 
        )
    }
}

export default SearchBar;