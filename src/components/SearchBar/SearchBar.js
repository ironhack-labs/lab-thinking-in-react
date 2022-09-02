import './SearchBar.css'

function SearchBar({products, setProducts, jsonData}) {
  
  function getChecked() {
    const searchBar = document.getElementById('searchedProduct').value;
    if (searchBar !== ''){
          const searchedList = products.filter((x) =>  x.name.includes(searchBar))
          setProducts(searchedList)
    } else {
      setProducts(jsonData)
    }
  }

  return (
    <>
      <label htmlFor="searchedProduct" className="form-label">Search</label>
      <input className="form-control" list="datalistOptions" id="searchedProduct" placeholder="Type to search..." onChange={getChecked}></input>
    </>
  )
}


export default SearchBar