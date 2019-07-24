import React, { Component } from 'react';

function SearchBar (props){
   return (
        <div>
            <input onChange={props.search}>
            </input>
        </div>
   )
}
export default SearchBar;