import { useState } from "react";

const SearchBar = ({search, setSearch, products, setFilterProducts}) =>{
    const updateSearch = event =>{
        const newProductArray = products.filter(eachProduct =>{
          return (
          eachProduct.name.toLowerCase().includes(event.currentTarget.value.toLowerCase())
    )
        })
        setSearch(event.target.value)
        setFilterProducts(newProductArray);
     };

    return (
        <div>
            <label>Search</label>
            <input type="text" value={search} onChange={updateSearch}/>
            <div>
                <input type="checkbox" name="checkbox" id="" />
                <label htmlFor="checkbox">Only show products in stock</label>
            </div>
        </div>
    )
}
export default SearchBar;

