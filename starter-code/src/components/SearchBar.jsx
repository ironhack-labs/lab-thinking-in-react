import React from 'react';

export default function SearchBar({ searchHandler }) {
    return (
        <div>
            <label>Search Bar</label>
            <input onChange={searchHandler} type="text" name="Search" />
        </div>
    );
}