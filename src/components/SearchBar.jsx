import { useState } from 'react';


function SearchBar (props) {

    const {showFilteredProducts, showStockProducts} = props
    const [searchName, setSearchName] = useState('');
    const [isChecked, setChecked] = useState(false)

    const handleForm = (event) => {
    setSearchName(event.target.value);
    showFilteredProducts(event.target.value)
    }

    const handleChecked = (event) => {
    showStockProducts(event.target.checked)
    setChecked(event.target.checked)
    }

    return(
        <div>
            <div className="search-input">
                <input type="search" value={searchName} onChange={handleForm} placeholder="Search for a product"  />
            </div>
            <div className="stock-checkbox">
                <input 
                type="checkbox"
                checked={isChecked}
                onChange={handleChecked}
                 /> Only shows products in stock

            </div>
        </div>
    )
}

export default SearchBar;