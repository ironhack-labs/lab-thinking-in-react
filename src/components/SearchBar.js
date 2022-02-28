import React from 'react'

export default function SearchBar(props) {

  const handleSearch = (event) =>{
      props.setsearchQuery(event.target.value)
  }

  const handleInstock = (event) =>{
    props.setInstock(event.target.checked)
  }
  return (
    <>
      <div>Search</div>
      <form>
          <input type="text"onChange={handleSearch}/>
          <div>
            <input type="checkbox" onChange={handleInstock}/>
            <label>Only show products in stock</label>
          </div>
      </form>
    </>
  )
}
