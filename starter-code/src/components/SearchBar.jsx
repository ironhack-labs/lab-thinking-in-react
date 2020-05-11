import React, { Component } from 'react'


export default function SearchBar(searchHandler) {
    return (
        <div>
        <label>Search Bar</label>
        <input onChange={searchHandler} type="text" id="search" name="search" />
    </div>
    )
}
