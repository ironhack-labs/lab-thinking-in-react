import React, { useState } from 'react'


export default function SearchBar(props) {

    const [filteredProducts, setFilteredProducts] = useState([])

    return (
        <div className='SearchBar'>
            Search
            <form>
                <input
                    type="text"
                    value={props.search}
                    onChange={props.setSearchHandler}
                    placeholder='search...'
                />
            </form>
            <form>
                <input
  //                  value={props.search}
                    type='checkbox'
                    checked={props.setChecked}
                    onChange={props.setCheckedHandler}
                /> Only show products in stock
            </form>
        </div>
    )
}

