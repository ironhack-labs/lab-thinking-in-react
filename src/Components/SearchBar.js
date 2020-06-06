import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import _ from 'lodash';

function SearchBar(props) {

    let inputChangeHandler = (event) => {
        let inputValue = event.target.value

        props.onSearchCallback(inputValue)
    }


        return(
            <div className="field">
                <div className="controls">
                    <input className="input" name="search" type="text" onChange={inputChangeHandler} value={props.searchTerm}></input>
                </div>
            </div>
        )
}

export default SearchBar;