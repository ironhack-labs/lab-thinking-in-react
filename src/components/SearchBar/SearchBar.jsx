import { useState } from 'react';

function Searchbar() {

    const onChange = e => {
        handleSearch(e.target.value)
    }

    return (
        <div>
            <label for="name">Search: </label>
            <input type="text" id="name" name="name" onChange={onChange} />
        </div>  
    )
}

export default Searchbar