

function SearchBar({searchInput,setSearchInput,checkedInput, setCheckedInput}) {
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleChangeChecked = (event) => {
    setCheckedInput(!checkedInput);
  };

  return (
    <>
    <div>
        <input type="text" value={searchInput} onChange={handleChange}></input> 
        {console.log(searchInput)}
    </div>
 
     <div>
        <input type="checkbox" value={checkedInput} onChange={handleChangeChecked}>
        {console.log(checkedInput)}
        </input> 
    </div> 
    </>
  )
}

export default SearchBar
