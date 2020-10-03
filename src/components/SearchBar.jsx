import React from 'react';

function SearchBar(props) {
    return (
        <div className="SearchBar">
            <form onSubmit={props.submitForm}>
                <label>Search</label>
                <input className="input" type="text" name="name" value={props.search} placeholder="Name" onChange={(e) => props.handleChange(e)} />
                <label><input name="Checkbox1" type="checkbox" onChange={(e) => props.handleClick(e)}/>Only show products on stock</label>
            </form>
        </div>
    );
};

export default SearchBar;