import jsonData from './../data.json';

function SearchBar({ setProducts }) {
  const handleClick = (event) => {
    const checked = event.target.checked;
    if (checked) {
      setProducts((prev) => {
        return prev.filter((product) => product.inStock);
      });
    } else {
      setProducts(jsonData);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;

    if (value) {
      setProducts((prev) => {
        return prev.filter((product) =>
          product.name.toLowerCase().includes(value.toLowerCase())
        );
      });
    } else {
      setProducts(jsonData);
    }
  };

  return (
    <div>
      <h2>Search</h2>
      <input type="text" onChange={handleChange} placeholder="Search..." />
      <div>
        <input
          className="input-checkbox"
          type="checkbox"
          onClick={handleClick}
        />
        <label>Only show products on stock</label>
      </div>
    </div>
  );
}

export default SearchBar;
