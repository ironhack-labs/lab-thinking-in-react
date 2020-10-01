import React from 'react';

function SearchBar (props) {

    let  handleSearch = (event) => {
    let inputChange = event.target.value

    props.onSearchCallback(inputChange) 
    }

    let handleCheckbox = (event) => {
        let inputChange = event.target.checked;
        props.onStockCallback(inputChange)
    }
}

export default SearchBar 
 