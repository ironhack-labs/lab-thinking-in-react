


function SearchBar (props) {

    const handleSearch = (event) => {
        console.log(event.target.value)
        const matchArray = props.products.filter(element => {
          return element.name.toLowerCase().includes(event.target.value.toLowerCase());
        })
        props.setMyFilteredArray(matchArray);
    }


  
  return(
      <div>
        <input type="text" onChange={handleSearch}/>
      </div>    
  )
}

export default SearchBar