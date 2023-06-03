import { useState } from 'react';


function SearchBar (props) {

    const {showFilteredProducts} = props
    const [searchName, setSearchName] = useState('');

    const handleChange = (event) => {
    setSearchName(event.target.value);
    showFilteredProducts(event.target.value)
    }

    return(
        <div>
            <div className="search-input">
                <input type="search" value={searchName} onChange={handleChange} placeholder="Search for a product"  />
            </div>
            <div className="stock-checkbox">
                <input type="checkbox" /> Only shows products in stock

            </div>
        </div>
    )
}

export default SearchBar;