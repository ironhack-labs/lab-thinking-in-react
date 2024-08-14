/* eslint-disable react/prop-types */
function SearchBar(props) {
    const { handleSearchChange, handleStockChange } = props;

    return (
      <div>
        <p>Search</p>
        <input type="text" onChange={handleSearchChange}/><br />
        <input type="checkbox" onChange={handleStockChange}/>Only show products in stock
      </div>
    );
}

export default SearchBar