import { useState } from 'react';
import jsonData from '../data.json';




function SearchBar(props) {

    const handleChangeFilter = event => {
        props.setQue(event.target.value)
    }

    const handleInStock = event => {
        props.setInStock(event.target.checked)
    }

    return (
        <div>
            <h1>Search Products</h1>
            <form>
                <input class="search-input" type="text" onChange={handleChangeFilter} />
                {/* <input type="text" value={input} onChange={handleChangeFilter} /> */}
            </form>
            <div class="check-box">
                <label htmlFor="">Show the items which are availible: </label>
                <input type="checkbox" checked={props.inStock} onChange={handleInStock} />
            </div>
        </div>
    )
}

export default SearchBar;