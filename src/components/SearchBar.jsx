function SearchBar(props) {
  const{handleSearch} = props 
    return (
        <div>
        <label htmlFor=""></label>
        Search for product
        <input type="text" onChange={(e)=>handleSearch(e.target.value)}/>
        </div>
      );
    }
    export default SearchBar;
