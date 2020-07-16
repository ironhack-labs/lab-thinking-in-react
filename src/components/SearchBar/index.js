import React from 'react'
import './style.css'

export default function index() {
    return (
        <div>
            <h2 className="search-bar-title">Search</h2>
            <input type="text" className="search-bar-input" />
            <label htmlFor="inStock">
                <input type="checkbox" className="search-bar-checkbox" name="inStock" id="inStock" />
            Only show products in stock
            </label>
        </div>
    )
}
