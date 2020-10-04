import React from 'react';
import './SearchBar.css'

function SearchBar(props) {
    return (
        <div className="SearchBar">
            <form onSubmit={props.submitForm}>
                <div><label>Search</label></div>
                <div><input className="input" type="text" name="name" value={props.search} placeholder="Search by Name" onChange={(e) => props.handleChange(e)} /></div>
                <div><label><input name="Checkbox1" type="checkbox" onChange={(e) => props.handleClick(e)}/>Only show products on stock</label></div>
            </form>
        </div>
    );
};

export default SearchBar;