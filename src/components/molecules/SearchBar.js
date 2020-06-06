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

        let stockHandler = (event) => {
            let currentInputValue = event.target.checked
            
            props.onStockCallback(currentInputValue) 
        }

        return (
            <div className="mb-3">
                <input type="text" placeholder="Search …" onChange={searchHandler} value={props.currentSearchTerm} className="input"></input>
                <br />
                <input type="checkbox" onChange={stockHandler} className="checkbox" checked={props.currentStockCheck}></input> Only show items in stock
                
            </div>
        )
}

export default SearchBar;