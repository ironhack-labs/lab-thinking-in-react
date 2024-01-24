import { useState } from "react";
import jsonData from "./../data.json"

function SearchBar({ setProducts }) {

    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = e => {
        setSearchQuery(e.target.value);

        const filteredProducts = jsonData.filter((product) => {
            return product.name.toLowerCase().includes(e.target.value.toLowerCase());
        });

        setProducts(filteredProducts);
    }

    return (
        <div>
            <form>
                <label htmlFor="search">Search</label>
                <input 
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <label htmlFor="checkbox"><input type="checkbox" />Only show products in stock</label>
            </form>
            <p>Search</p>
        </div>
    );
}

export default SearchBar;