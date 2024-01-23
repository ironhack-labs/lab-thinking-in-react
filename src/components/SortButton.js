import { useState } from "react"

function SortButton(props) {

  const [order,setOrder] = useState(true)

// it goes both sides

  function sortByName(){
    const productsCopy = [...props.products]
    productsCopy.sort((a,b)=>{
      return(order ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
      )
    })
    props.setProducts(productsCopy)
    setOrder(!order)
    
  }

  return (
    <button onClick={sortByName}>Sort By Name</button>
  )
}

export default SortButton
