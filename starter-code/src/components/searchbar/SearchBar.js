import React, { Component } from "react";

function SearchBar(props) {


  const updateInput = (e) => {
    // console.log(e);
    console.log(e.target.value)
    props.sendToParent(e.target.value)
  }



    return (
      <input
        // className="input search"
        placeholder="Enter a Search Term"
        // value = {props.sendToParent}
        onChange={ (e) => {updateInput(e)}}
      />
    )
}

export default SearchBar;
