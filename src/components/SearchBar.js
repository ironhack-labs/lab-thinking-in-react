import React from 'react';
import "./SearchBar.css";
import listOfProducts from "../data.json"

class SearchBar extends React.Component {

    handleInputSearch = (event) => {
        this.props.setInputField(event.target.value)
    }

    render() {
        return (
            <form className="SearchBar">
                <label>
                    Search
                    <input type = "text" name= "searchInputField"  placeholder="Search..." onChange = {this.handleInputSearch}/>
                </label>

                <label for="onlyProductsStock">
                    Only show products on stock
                    <input type = "checkbox" id="onlyProductsStock" name="onlyProductsStock" />
                </label>
    
            </form>
        )
        
    }
   
}


export default SearchBar;