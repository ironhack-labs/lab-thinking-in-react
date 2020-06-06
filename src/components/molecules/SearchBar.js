import React from 'react';

// importing styles
import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';

// importing sub components
// import FoodList from './components/FoodList'


function SearchBar(props) {

        let searchHandler = (event) => {
            let currentInputValue = event.target.value

            props.onSearchCallback(currentInputValue) 
        }

        return (
            <div className="mb-3">
                <input placeholder="Search …" onChange={searchHandler} value={props.currentSearchTerm} className="input"></input>
                <br />
                Only show products on stock
            </div>
        )
}

export default SearchBar;