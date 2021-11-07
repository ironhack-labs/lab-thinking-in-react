import React from 'react';

export default function SearchBar() {
    console.log(`I am a searchbar`)
    return (
        <>
        <h3>Search</h3>
        <p>have here a search box</p>
        <div>
            <input type="checkbox" id="onStock" name="onStock"/>
            <label for="onStock">Only show products on stock</label>
        </div>
        </>
    )
}