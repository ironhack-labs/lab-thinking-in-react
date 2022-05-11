import React from 'react'

export const SearchBar = (props) => {
    const {setFindStock, findStock, Stock} = props
    const {Search}=props
  return (
    <div>
        <p style={{
            "fontSize":"28px",
            "textAlign":"center"
        }}>Search</p>
        <input style={{
            "width":"90%",
            "margin":"20px 5%"
        }} type="text" name="name" onChange={(e)=>Search(e.target.value)}/>
        <input id="Stock"   onClick={(e)=>Stock(e.target.checked)} type="checkbox"/>
        <label for="Stock">Only show products in stock</label>
    </div>
  )
}
