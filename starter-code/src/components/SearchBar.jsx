import React from 'react';

const SearchBar = (props) => {

    const handleChange = (event) => {
        let { value } = event.target;
        props.search(value);
    }

    const handleChangeCheckbox = (event) => {
      // console.log(event.target.checked);
      props.checkbox(event.target.checked)
    }
        
    return (
      <React.Fragment>
        <div id="search-container">
          <label htmlFor="search">Search</label>
          <input type="text" placeholder="Search Items" name="search" id="search" onChange={(e) => handleChange(e)}/>
        </div>
        <div id="checkbox-container">
          <input type="checkbox" name="checkbox" id="checkbox" onChange={(e) => handleChangeCheckbox(e)}/>
          <label htmlFor="checkbox">Only show products in stock</label>
        </div>
      </React.Fragment>
    )

}

export default SearchBar;