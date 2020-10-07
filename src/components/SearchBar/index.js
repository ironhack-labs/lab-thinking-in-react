import React from 'react';





const SearchBar = (props) => {


    function isItChecked(event) {
        //console.log(event.currentTarget.checked)
        props.showStocked(event.currentTarget.checked)
    }

    function changeHandler(event) {
        //console.log(event.target.value);
        const value = event.target.value;
        props.search(value);
    }

  return (
    <div className="searchbar">
      <form>
        <span>Search</span>
        <div>
          <input type="text" name="search" onChange={changeHandler}/>
        </div>
        <label htmlFor="showStocked">
          <input type="checkbox" onChange={isItChecked}/>
          Only show products on stock
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
