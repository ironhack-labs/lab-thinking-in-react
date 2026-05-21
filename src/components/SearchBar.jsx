import React from 'react'
import {useState} from 'react'

export default function SearchBar({searchQuery, onSearch, onlyInStock, onStockFilter}) {
    
  return (
    <div>
        <h4>Search</h4>
        <input type="text"
        placeholder="search here"
        value={searchQuery}
        onChange={(e)=>{onSearch(e.target.value)}}/>
        <button>🔎</button>
        <label>
        <input type="checkbox"
        checked={onlyInStock}
        onChange={(e) => onStockFilter(e.target.checked)}/> Only Show in Stock
        </label>
    </div>
  )
}
