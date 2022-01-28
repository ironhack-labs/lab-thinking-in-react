import React, {useState} from "react";
import "./SearchBar.css";

const SearchBar = ( {jsonData, setProducts} ) => {
    const [search, setSearch] = useState("");
    const [showInStock, setShow] = useState(false);

    const getInStock = [...jsonData].filter(product => product.inStock === true);

    const handleSearchChange = event => {
        setSearch(event.target.value);

        if (showInStock === false) {
            const newProducts = [...jsonData].filter(product => product.name.includes(event.target.value));
            setProducts(newProducts);
        } else {
            const newProducts = [...getInStock].filter(product => product.name.includes(event.target.value));
            setProducts(newProducts);
        }
    };

    const handleShowChange = event => {
        setShow(event.target.checked);

        if (showInStock === false) {
            setProducts(getInStock);
        } else {
            setProducts(jsonData);
        };
    };

    return (
        <div id="search">
            <div id="search-bar">
                <p>Search</p>
                <input
                    type="text"
                    name="search"
                    value={search}
                    onChange={e => handleSearchChange(e)}
                />
            </div>
            <div>
                <input
                    type="checkbox"
                    className="input search-bar"
                    name="search"
                    checked={showInStock}
                    onChange={e => handleShowChange(e)}
                />
                <label>Only show products in stock</label>
            </div>
        </div>
    );
};

export default SearchBar;