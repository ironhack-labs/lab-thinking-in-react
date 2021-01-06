import React from 'react'

function SearchBar(props) {
        return (
                <div>
                        <h2>Search</h2>

                        <input type="text" name="search" id="search"
                                placeholder="Search product's name"
                                value={props.inputSearch}
                                onChange={props.onChangeSearch} />

                        <form>
                                <input type="checkbox" name="checkbox" id="checkbox"
                                        value="noChecked"
                                        onChange={props.onChangeCheckBox}
                                ></input>
                                <label htmlFor="checkbox">Only show products on stock</label>
                        </form>

                </div>
        )
}

export default SearchBar
