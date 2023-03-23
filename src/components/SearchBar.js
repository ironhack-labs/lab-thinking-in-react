import React from 'react';

function SearchBar({ handleSearchProducts, handleInStockProducts }) {
  return (
    <>
      {console.log('search ' + handleSearchProducts, ' stock ' + handleInStockProducts)}
      <input
        className='border border-black pl-2 rounded-lg h-10 outline-none text-gray-500'
        placeholder='Search...'
        type="text"
        onChange={(e) => {
          handleSearchProducts(e.target.value)
        }}
      />
      <br />
      <div className="inline-flex items-center mt-2">
        <input
          type="checkbox"
          name="isStock"
          id="isStock"
          className="h-5 w-5 text-blue-500 mr-2"
          onChange={(e) => {
            handleInStockProducts(e.target.checked)
          }}
        />
        <label htmlFor="isStock" className="text-gray-700 font-medium ">Show only products in stock</label>
      </div>
    </>
  )
}

export default SearchBar;