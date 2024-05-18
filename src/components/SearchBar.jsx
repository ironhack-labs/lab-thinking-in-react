
const SearchBar = (props) => {

 const handleSearch = (event)=>{
  props.filterProducts(event.target.value)
 }

/*  const handleCheckBox = (event) =>{
  props.checkBox(event.target.onChange)
 }
   */
  return (
    <div>
      <form>
        <label>Search</label>
        <input type="text" name="searchValue" value={props.searchValue} onChange={handleSearch}/>
      </form>
      <form>
      <label>Only show available products</label>
        <input type="checkbox" name="inStock" checked={props.checkStock} onChange={props.boxFilter} />
      </form>
    </div>
  )
}

export default SearchBar

