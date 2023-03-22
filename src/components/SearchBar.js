import React from 'react'

function SearchBar({searchProducts}) {
  const searchProduct = (searchValue) => {
    searchProducts(searchValue)
  }
  return (
    <>
      <input className='border border-black' type="text" onChange={(e)  => {
        searchProduct(e.target.value)
      }} />
    </>
  )
}

export default SearchBar