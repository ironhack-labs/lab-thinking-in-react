import React from 'react'

function SearchBar({handleQuery, query}) {

    // const handleChange = (event) => {
    //     const {value} = event.target;
    //     setQuery(value)
    // };

    return <form>
        <label htmlFor="product"></label>
        <input name='product' type='text' value={query} onChange={handleQuery}></input>
        <button type='submit' >Search</button>
    </form>
}

export default SearchBar