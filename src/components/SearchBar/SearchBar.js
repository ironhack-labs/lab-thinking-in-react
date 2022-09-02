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

  function getCheckedStock () {
    const onStock = document.getElementById('productsOnStock').checked;

    console.log(onStock)
    if (onStock === true){
      const onStockList = products.filter((x) => x.inStock !== false)
      setProducts(onStockList)
    } else {
      setProducts(jsonData)
    }
    }

  return (
    <div className='col justify-content-center align-self-center '>
      <label htmlFor="searchedProduct" className="form-label">Search</label>
      <input className="form-control" list="datalistOptions" id="searchedProduct" placeholder="Type to search..." onChange={getChecked}></input>
      <div className="form-check form-check-inline flex-column mt-3">
        <input className="form-check-input" type="checkbox"  id="productsOnStock" onChange={getCheckedStock}/>
        <label className="form-check-label" htmlFor="productsOnStock">
          Only Show Products in Stock
        </label>
      </div>
    </div>
  )
}


export default SearchBar