import React from "react";


export default function SearchBar(props) {
    const handleInputChange = event => {
        props.setQueryProp(event.target.value)
    }
    
    const handleInStock = event => {
        props.setCheckedProp(event.target.checked)
    }

    return (
        <div>
            <p>Search</p>
            <form>
                <input type="text" onChange={handleInputChange}></input> <br></br>
                {/* <input type="checkbox" checked={props.product.inStock} />  */} 
                <input type="checkbox" onChange={handleInStock} id="stock" name="stock"></input>
                <label>Only show products in stock</label>
            </form>
            
        </div>   
    )
}