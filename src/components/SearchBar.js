import React from 'react'

function SearchBar({handleSearchProducts, handleInStockProducts }) {
  return (
    <>
    {console.log('search '+ handleSearchProducts, ' stock ' + handleInStockProducts)}
      <input
        className='border border-black m-8 pl-2'
        placeholder='  Search...'
        type="text"
        onChange={(e)  => {
          handleSearchProducts(e.target.value)
      }} /> <br/>
      <input
        type="checkbox"
        name="isStock"
        id="isStock"
        onChange={(e) => {
        handleInStockProducts(e.target.checked)
      }}/>
      <label htmlFor="isStock">Show only products on stock</label>
    </>
  )
}

export default SearchBar;