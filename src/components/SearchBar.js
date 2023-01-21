import { useState } from "react";
import './../style/SearchBar.css'

function SearchBar(props) {
    const [name, setName] = useState("");
    const [inStock, setInStock] = useState(false)

    function handleName(event) {
        setName(event.target.value)

        props.handleFilterProduct(event.target.value)
    }


    function handleInStock(event) {
        setInStock(event.target.checked)
        props.handleCheckbox(event.target.checked)

    }


    return (
        <div className="searchSection">
            <h1>Search</h1>
            <input onChange={handleName} type='text' value={name} />
            <div>
                <input onChange={handleInStock} type="checkbox" checked={inStock} id="instock" />
                <label form="instock">Only show products in stock</label>
            </div>

        </div>
    )
}

export default SearchBar;