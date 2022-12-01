import { useState } from "react";

const SearchBar = ({ products, setFilter }) => {
    const [filterStockState, setFilterStockState] = useState();
    let _products = [...products];

    const filterStock = (event) => {
        const { checked } = event.target;

        if (checked) {
            _products = _products.filter((product) => product.inStock === true);
        }

        setFilter(_products);
        checked ? setFilterStockState(true) : setFilterStockState(false)
    }

    const filterProducts = (event) => {
        const { value } = event.target;

        if (filterStockState) {
            _products = _products.filter((product) => product.inStock === true && product.name.toLowerCase().includes(value.toLowerCase()));
        }
        else {
            _products = _products.filter((product) => product.name.toLowerCase().includes(value.toLowerCase()));
        }

        setFilter(_products);
    };

    return (
        <div>
            <input type="text" name="product" onChange={filterProducts} />
            <br /><br />
            <input type="checkbox" name="stockfilter" onChange={filterStock} /><span>Only show products in stock</span>
        </div>
    );
}

export default SearchBar;