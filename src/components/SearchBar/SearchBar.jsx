import { useState } from 'react';
import './SearchBar.css'

function SearchBar() {

    const [searchValue, setSearchValue] = useState('');
    const [checkBoxValue, setCheckBoxValue] = useState('');

    const handleSearchInput = (e) => {
        setSearchValue(e.target.value)
        console.log(e.target.value)
    }
    const handleCheckBoxInput = (e) => { setCheckBoxValue(e.target.value) }

    return (

        <div>
            <label >Search</label>
            <input type='text' value={searchValue} onChange={handleSearchInput}></input>
            <input type='checkbox' value={checkBoxValue} onChange={handleCheckBoxInput}></input>
        </div>

    )
}

export default SearchBar
