import React, { Component } from 'react';

class SearchBar extends Component {

render({handleChange} = this.props) {
    return (
        <>
       
       <input onChange = {(elm) => handleChange(elm)}></input>

        </>
    )
}}


export default SearchBar