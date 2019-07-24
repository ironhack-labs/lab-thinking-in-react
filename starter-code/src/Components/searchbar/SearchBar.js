import React from 'react';
import '../../App.css';

function SearchBar(props) {

    return (
      <div className="App">
        <form>
          <div className="top">
          <legend>Search</legend>
          <input onChange={props.filter} className="search-bar" type="search"></input>
          <input onClick={props.checkFun} type="checkbox" name="stocked" ></input>
          <label>Only show products on stock</label>
          <legend></legend>
          <button onClick={props.sortCat}>Sort by Category</button>
          </div>
        </form>
      </div>
    );
  }


export default SearchBar;
