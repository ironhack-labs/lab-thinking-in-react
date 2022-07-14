import React from 'react'

function SearchBar(props) {
    const handleInputChange = event => {

        props.setQueryProp(event.target.value)
    }

    const handleCheckBox = event => {
        props.setCheckedProp(event.target.checked)
    }

    return (
        <nav>
            <div>
                <p>Search</p>
                <input type="text" onChange={handleInputChange} />
                <div><input type="checkbox" onClick={handleCheckBox}></input>
                    <p>Only show products in stock</p>
                </div>

            </div>
        </nav>
    )
}

export default SearchBar;