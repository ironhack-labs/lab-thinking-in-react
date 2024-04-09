
import { useState } from "react";

function SearchBar({ toSearch, setShowStockOnly, toggleInStock }) {
	const [search, setSearch] = useState('');
	const [stockChecked, setStockChecked] = useState(false);
	const [filteredProducts, setFilteredProducts] = useState([]);

	const handleSearch = (e) => {
		const searchTerm = e.target.value;
		setSearch(searchTerm);
		toSearch(searchTerm, stockChecked); // Update state with filtered result
	};

	const handleStockChange = (e) => {
		const isChecked = e.target.checked;
		setStockChecked(isChecked);
		toggleInStock(isChecked);
	};
	return (
		<form>
			<h1>Search</h1>
			<input type="text" name="search" value={search} onChange={handleSearch} />
			<input type="checkbox" id="checkbox" checked={setShowStockOnly} onChange={handleStockChange} />
			<label htmlFor="inStock">Only show products in stock</label>
		</form>
	);
}

export default SearchBar;
