import React from 'react'
import './style.css'

export default function index({ handlerOnChange, handlerIsChecked }) {
    return (
        <div className="search-bar">
            <h2 className="search-bar-title">Search</h2>
            <input type="text" className="search-bar-input" onChange={handlerOnChange} />
            <label htmlFor="inStock">
                <input type="checkbox"
                    className="search-bar-checkbox"
                    onChange={handlerIsChecked}
                    name="inStock"
                    id="inStock" />
            Only show products in stock
            </label>
        </div>
    )
}
