import React from "react";

    
class SearchBar extends React.Component {


        searchHandler = (event) => {
        let inputValue = event.target.value
    
        
         this.props.onSearchCallback(inputValue)
      };
    
    

    render() {


    return (
       
        <div>
        <form>
        <label>Searchbar </label>
        <input type="text" placeholder="Search" onChange={this.searchHandler} value={this.props.currentSearchTerm}></input>
        </form>    
      </div>        
        );
      };
    }

export default SearchBar;