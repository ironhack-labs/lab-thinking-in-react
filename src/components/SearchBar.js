import './SearchBar.css';
const SearchBar = (props) => {
  return (
    <div id="menu">
      <div id="search">
        <label>Search</label>
        <input type="text" id="Search" onChange={() => props.search()} />
      </div>
      <div>
        <input type="checkbox" onChange={() => props.filter(props.products)} />
        <label>Only show products in stock</label>
      </div>
    </div>
  );
};
export default SearchBar;
