import React from 'react'

function SearchBar({filter,setFilter,setOnStockCheck,onStockCheck}) {
  let check = false
  const handleCheck = (e) => {
    if (e){
      setOnStockCheck(false)
      console.log(onStockCheck)
    } else {
      setOnStockCheck(true)
      console.log(onStockCheck)
    }
  }
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" name="search" id="search" onChange={() => {setFilter(event.target.value)}} value={filter}/>
      <br />
      <input type="checkbox" name="onStock" id="onStock" onChange={() => handleCheck(event.target.checked)} />
      <label htmlFor="onStock">Also display items out of stock</label>
    </div>
  )
}

export default SearchBar