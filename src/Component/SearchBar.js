import React from 'react'

function SearchBar(props) {
    
function search(e){
  
  let filteredProducts = props.products.filter((oneProduct)=>{
    return oneProduct.name.includes(e.target.value)
  })
  if(e.target.value===""){
    props.setProducts(props.allProducts)
  }
  else{
    props.setProducts(filteredProducts)
  }
}
     return (
    <div>
    <button onClick={props.sortByPrice} >Sort By Price</button>
    <button onClick={props.sortByName}>Sort by Name</button>

    <input type="text" onChange={search} />
    

        
    </div>
  )
}

export default SearchBar