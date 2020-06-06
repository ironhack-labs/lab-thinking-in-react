import React from 'react';

// importing styles
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

function SearchBar(props) {

        let searchHandler = (event) => {
            let currentInputValue = event.target.value

            props.onSearchCallback(currentInputValue) 
        }

        return (
            <div className="mb-3">
                <input name="searchBar" type="text" placeholder="Search …" onChange={searchHandler} value={props.currentSearchTerm} className="input"></input>
            </div>
        )
}

export default SearchBar;