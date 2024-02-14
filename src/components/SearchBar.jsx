import { useState } from "react";
function SearchBar({onSearch, onStockFilter}) {
    const [search, setSearch] = useState("")
    const [isChecked, setIsChecked] = useState(false)

    const handleSearch = (event) => {
        setSearch(event.target.value)
        onSearch(event.target.value)
        console.log("Search value:", event.target.value)
    }

    const handleCheckbox = (event) => {
        setIsChecked(event.target.checked)
        onStockFilter(event.target.checked)
        console.log("clicking")

    }


  return (
    <div>
      <input className="search-bar"
      type="text"
      placeholder="Search for a specific product"
      value={search}
      onChange={handleSearch}/>


    <label>
        Only show products in stock:
      <input className="check"
      type="checkbox"
      checked={isChecked}
      onChange={handleCheckbox} />
</label>

    </div>
  );
}

export default SearchBar;    




