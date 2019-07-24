import React, { Component } from "react";

function SearchBar(props) {


  const updateInput = (e) => {
    // console.log(e);
    console.log(e.target.value)
    props.sendToParent(e.target.value)
  }



    return (
      <div>
        
        <input placeholder="Enter a Search Term" onChange={ (e) => {updateInput(e)}} />
        <input type='checkbox' onChange={props.checkCheckbox} />

      </div>
    )
}

export default SearchBar;
