import { useState } from "react";

function SearchBar({ onSearch, onAvailabilityCheck }) {
  const [searchParameter, setSearchParameter] = useState(["", false, false])

  if (searchParameter[1] && searchParameter[2]) {
    setSearchParameter([searchParameter[0], searchParameter[1], false]);
    onAvailabilityCheck();
  }
  
  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchParameter([value, searchParameter[1], true]);
    onSearch(value);
  }

  const handeleCheckChange = (event) => {
    const { checked } = event.target;
    setSearchParameter([searchParameter[0], checked, true])
    checked ? onAvailabilityCheck() : onSearch(searchParameter[0]);
  }

  return (
    <div className='d-flex flex-column gap-2 m-2'>
        <label htmlFor="searchbar" className=" fw-semibold" >Search</label>
        <input id="searchbar" type="text" onChange={handleSearchChange} />
        <div className='d-flex gap-1 justify-content-center'><input id="productcheck" type="checkbox" onChange={handeleCheckChange} /><label htmlFor="productcheck">Only show products in stock</label></div>
    </div>
  )
}

export default SearchBar;
