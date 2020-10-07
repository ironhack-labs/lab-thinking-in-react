import React from 'react';

class SearchBar extends React.Component {
    state = {
      name: "",
    }


  handleSearch = (event) => {
      
  } 
    
    render () {
        return(
            <div>
                <h4>Search</h4>
                <form>
                <input type="text" placeholder="Search" name="search" onChange={this.handleSearch}></input>
                </form>
            </div>
        )
    }
}
export default SearchBar;