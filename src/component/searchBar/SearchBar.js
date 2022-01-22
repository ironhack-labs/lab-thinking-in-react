import React from "react";

const SearchBar = ({searchTerm, checkBoxItems}) => {
  // state to manage search input
  const [searchInput, setSearchInput] = React.useState("");

  // state to manage checked box
  const [isChecked, setIsChecked] = React.useState(false);

  const handleSearch = ({ target }) => {
    // console.log(target.value);
    setSearchInput(target.value);

    // Pass the target.value from child -> to parent 
    // searchTerm will reference to->getSearchTerm and pass in the target.value
    searchTerm(target.value)  
  };

  // every time onChange or click on the checkbox, if it's true, will be false and the other way around
  const handleChecked = (event) => {
    setIsChecked(!isChecked); //change between false and true 
    checkBoxItems(event.target.checked); 
  }

  return (
    <div>
      <h1>Searchbar</h1>
      <input
        type="text"
        placeholder="Search for an item"
        value={searchInput} //update the value with whay it's typing for the user
        onChange={handleSearch}
      />
      <br />
      <label htmlFor="inStock">Only show products in stock</label>
      <input 
        type="checkbox" 
        name="inStock" 
        id=""
        checked={isChecked} //start with false or not checked
        onChange={handleChecked}
      />
    </div>
  );
};

export default SearchBar;
