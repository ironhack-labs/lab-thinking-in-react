import React, { useState } from 'react';

function SearchBar ({ products, setProducts }) {
    const [search, setSearch] = useState('');
    const [inStock, setInStock] = useState(false);

    const handleSearch = (event) => {
        setSearch(event.target.value);
        if (inStock) {
            const filteredProducts = products.filter((product) => {
                return product.name.toLowerCase().includes(event.target.value.toLowerCase()) && product.inStock === true;
            });
            setProducts(filteredProducts);
        } else {
            const filteredProducts = products.filter((product) => {
                return product.name.toLowerCase().includes(event.target.value.toLowerCase());
            });
            setProducts(filteredProducts);
        }
    };

    const handleInStock = (event) => {
        setInStock(event.target.checked);
        if (event.target.checked) {
            const filteredProducts = products.filter((product) => {
                return product.inStock === true;
            });
            setProducts(filteredProducts);
        } else {
            setProducts(products);
        }
    };

    return (
        <div>
            <h3>Search</h3>
            <input className="searchBar" type="text" value={search} onChange={handleSearch} placeholder="Search..."/>
            <br />
            <input type="checkbox" checked={inStock} onChange={handleInStock} />
            <label>Only show products on stock</label>
        </div>
    );
}

export default SearchBar;
