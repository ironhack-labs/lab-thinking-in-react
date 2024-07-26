


function SearchBar(props) {

  function search(e) {
    let filteredProducts
    filteredProducts = props.products.filter((oneProduct) => {
      return (
        oneProduct.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    })

    if (e.target.value === '') {
      props.setProducts(props.allProducts)
    }
    else {
      props.setProducts(filteredProducts)
    }
    
  }



  return (
    <div>
      <input type="text" onChange={search} placeholder="Search"/>

      <button onClick={props.sortByName}>Sort by Name</button>
      <button onClick={props.sortByPrice}>Sort by Price</button>
    </div>
  )
}

export default SearchBar
