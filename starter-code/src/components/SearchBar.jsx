import React from 'react'

export default function SearchBar({ clbk }) {
    return (
        <form id='search-block'  >

            <label htmlFor="site-search">Search the site:</label>

            <input type="text" id="site-search" name="name" onChange={clbk} />

        </form>
    )
}
