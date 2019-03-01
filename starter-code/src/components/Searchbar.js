import React from "react"

function Searchbar(props) {
  return (
   <form>
     <label>Search:</label>
     <input onChange={(e) => props.searchHandler(e)}></input> <br/> <br/>
     <label>In stock only: </label>
     <input onChange={(e) => props.checkboxHandler(e)}type="checkbox"></input>
   </form>
  )
}

export default Searchbar