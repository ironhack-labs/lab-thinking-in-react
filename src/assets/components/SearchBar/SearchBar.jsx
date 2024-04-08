import './SearchBar.css';

function SearchBar(props) {

  const handleChange = (event) => {

      const target = event.target;
      const name = target.name;
      const value = target.type === "checkbox" ? target.checked : target.value;

      if (name === "check") {
        props.filterProducts("", value);
      } else {
        props.filterProducts(value);
      }
    };

    return (
      <div className="d-flex row justify-content-center my-3">
        <input className="search-bar my-3" type="text" onChange={handleChange} name="search" placeholder="Search..." />
        <label>
          <input name="check" type="checkbox" onChange={handleChange} />
          Only show products in stock
        </label>
      </div>
    );
  }

  export default SearchBar;