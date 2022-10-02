
function SearchBar(props) {
  return (
    <div>
        <h3>Search: </h3>
        <input type="text" placeholder="Search Products.."  className='searchbar_input'
        onChange={(e) => props.filterProductsSearch(e.target.value)} ></input>    
        <div className="ckeckbox">
        <input type="checkbox" checked={props.inStock} onChange={() => props.filterProductsSearch(!props.inStock)}></input>
        <p>Only show products in stock</p>
        </div>
    </div>
  );
}

export default SearchBar;