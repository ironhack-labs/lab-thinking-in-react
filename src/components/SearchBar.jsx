/* eslint-disable react/prop-types */
const SearchBar = ({ query, handleInputChange }) => {
  return (
    <>
      <h4>Search</h4>
      <div className="d-flex justify-content-center">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          value={query}
          style={{ width: "400px" }}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default SearchBar;
