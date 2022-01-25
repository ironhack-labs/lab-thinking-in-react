import React from "react";

const SearchBar = ({onChangeSearchBar}) => {
  // state to manage search input
  const [searchInput, setSearchInput] = React.useState("");

  // state to manage checked box
  //const [isChecked, setIsChecked] = React.useState(false);

  const onChangeHandler = ({ target }) => {
    //console.log(target.value); //target -> input
    setSearchInput(target.value);

    // LIFT UP STATE -> from child to -> parent
    // after the search, we will pass through PROPS the current value of ->searchInput
    // Pass the target.value from child -> to parent 
    // onChangeSearchBar will reference to->getSearchTerm and pass in the target.value
    // Function passed through props
    onChangeSearchBar(searchInput)  
  };

  // // every time onChange or click on the checkbox, if it's true, will be false and the other way around
  // const handleChecked = (event) => {
  //   setIsChecked(!isChecked); //change between false and true 
  //   checkBoxItems(event.target.checked); 
  // }

  return (
    <div>
      <h1>Searchbar</h1>
      <input
        type="text"
        placeholder="Search for an item"
        value={searchInput} //update the value with whay it's typing for the user
        // onChange -> event listener that will triggered when user type in the input
        // onChange receives a function as a value -> onChangeHandler function
        // this onChange -> point to and trigger -> onChangeHandler function
        // the browser attached the "event object" to the onChange
        onChange={onChangeHandler} 
      />
      <br />
      {/* <label htmlFor="inStock">Only show products in stock</label>
      <input 
        type="checkbox" 
        name="inStock" 
        id=""
        checked={isChecked} //start with false or not checked
        onChange={handleChecked}
      /> */}
    </div>
  );
};

export default SearchBar;
