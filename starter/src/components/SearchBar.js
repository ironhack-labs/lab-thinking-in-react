import React, { Component } from 'react';
import { FilterableProductTable } from './FilterableProductTable'

export default class SearchBar extends FilterableProductTable {
    
    filtered (input) {
        console.log(input);
        
    }
    
    render () {
        return (
            <div>
                <input placeholder='search' type="text" onChange={e => this.filtered(e.target.value)}/>
                <label >Only show products in stock</label>
                <input type="checkbox" />
            </div>
        )
    }
} 